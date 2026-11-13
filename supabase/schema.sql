-- Run this once in Supabase Dashboard > SQL Editor.
-- Anonymous visitors are assigned a private Supabase Auth identity by the site.
-- Each visitor can count a game once per UTC day.

create table if not exists public.game_catalog (
    id text primary key
);

insert into public.game_catalog (id) values
    ('valorant'), ('league-of-legends'), ('teamfight-tactics'), ('genshin-impact'), ('honkai-star-rail'),
    ('zenless-zone-zero'), ('wuthering-waves'), ('warframe'), ('roblox'), ('minecraft'),
    ('world-of-warcraft'), ('hearthstone'), ('starcraft-2'), ('overwatch-2'), ('albion-online'),
    ('runescape'), ('old-school-runescape'), ('guild-wars-2'), ('rainbow-six-siege'), ('trackmania'),
    ('path-of-exile'), ('path-of-exile-2'), ('war-thunder'), ('enlisted'), ('crossout'),
    ('world-of-tanks'), ('world-of-warships'), ('world-of-tanks-blitz'), ('delta-force'), ('once-human'),
    ('where-winds-meet'), ('naraka-bladepoint'), ('apex-legends'), ('pso2-new-genesis'), ('maplestory'),
    ('mabinogi'), ('vindictus'), ('lineage-2'), ('aion'), ('blade-soul'),
    ('elsword'), ('cabal-online'), ('dungeon-fighter-online'), ('metin2'), ('nostale'),
    ('dofus'), ('wakfu'), ('neverwinter'), ('star-trek-online'), ('palia')
on conflict (id) do nothing;

alter table public.game_catalog enable row level security;
revoke all on table public.game_catalog from public, anon, authenticated;

create table if not exists public.game_download_clicks (
    user_id uuid not null references auth.users (id) on delete cascade,
    game_id text not null references public.game_catalog (id) on delete cascade,
    click_day date not null default ((now() at time zone 'utc')::date),
    created_at timestamptz not null default now(),
    primary key (user_id, game_id, click_day),
    constraint game_download_clicks_game_id_format check (game_id ~ '^[a-z0-9-]{1,80}$')
);

alter table public.game_download_clicks enable row level security;
revoke all on table public.game_download_clicks from public, anon, authenticated;

create or replace function public.record_game_download(p_game_id text)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
    if auth.uid() is null then
        raise exception 'Sign in is required to count a download click.';
    end if;

    if p_game_id !~ '^[a-z0-9-]{1,80}$' then
        raise exception 'Invalid game id.';
    end if;

    if not exists (select 1 from public.game_catalog where id = p_game_id) then
        raise exception 'Unknown game id.';
    end if;

    insert into public.game_download_clicks (user_id, game_id)
    values (auth.uid(), p_game_id)
    on conflict (user_id, game_id, click_day) do nothing;
end;
$$;

create or replace function public.get_top_downloaded_game()
returns table (game_id text, clicks bigint)
language sql
security definer
set search_path = ''
as $$
    select stats.game_id, stats.clicks
    from (
        select clicks.game_id, count(*)::bigint as clicks
        from public.game_download_clicks as clicks
        group by clicks.game_id
    ) as stats
    order by stats.clicks desc, stats.game_id asc
    limit 3;
$$;

revoke all on function public.record_game_download(text) from public, anon, authenticated;
grant execute on function public.record_game_download(text) to authenticated;
revoke all on function public.get_top_downloaded_game() from public;
grant execute on function public.get_top_downloaded_game() to anon, authenticated;
