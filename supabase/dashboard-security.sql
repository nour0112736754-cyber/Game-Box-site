-- Protect Game Box aggregate statistics behind an explicit email allow-list.
-- Add the administrator email in Supabase directly; do not commit that address.

create table if not exists public.dashboard_admins (
    email text primary key check (email = lower(email) and email like '%@%')
);

alter table public.dashboard_admins enable row level security;
revoke all on table public.dashboard_admins from public, anon, authenticated;

create or replace function public.get_download_dashboard_stats()
returns table (game_id text, total_clicks bigint, clicks_today bigint, clicks_7d bigint)
language plpgsql
security definer
set search_path = ''
as $$
begin
    if not exists (
        select 1
        from public.dashboard_admins as admin
        where admin.email = lower(coalesce(auth.jwt() ->> 'email', ''))
    ) then
        raise exception 'Dashboard access denied.' using errcode = '42501';
    end if;

    return query
    select
        catalog.id,
        count(clicks.id)::bigint,
        count(clicks.id) filter (where clicks.click_day = (now() at time zone 'utc')::date)::bigint,
        count(clicks.id) filter (where clicks.click_day >= (now() at time zone 'utc')::date - 6)::bigint
    from public.game_catalog as catalog
    left join public.game_download_clicks as clicks on clicks.game_id = catalog.id
    group by catalog.id
    order by count(clicks.id) desc, catalog.id asc;
end;
$$;

create or replace function public.get_download_daily_stats()
returns table (day date, clicks bigint)
language plpgsql
security definer
set search_path = ''
as $$
begin
    if not exists (
        select 1
        from public.dashboard_admins as admin
        where admin.email = lower(coalesce(auth.jwt() ->> 'email', ''))
    ) then
        raise exception 'Dashboard access denied.' using errcode = '42501';
    end if;

    return query
    select days.day::date, count(clicks.id)::bigint
    from generate_series(
        ((now() at time zone 'utc')::date - 6)::timestamp,
        (now() at time zone 'utc')::date::timestamp,
        interval '1 day'
    ) as days(day)
    left join public.game_download_clicks as clicks
        on clicks.click_day = days.day::date
    group by days.day
    order by days.day;
end;
$$;

revoke all on function public.get_download_dashboard_stats() from public, anon, authenticated;
revoke all on function public.get_download_daily_stats() from public, anon, authenticated;
grant execute on function public.get_download_dashboard_stats() to authenticated;
grant execute on function public.get_download_daily_stats() to authenticated;
