(() => {
    const config = window.GAMEBOX_SUPABASE_CONFIG;
    const sdk = window.supabase;
    if (!config || !sdk?.createClient) return;
    if (config.url.includes("YOUR_PROJECT_ID") || config.anonKey.includes("YOUR_")) return;

    window.gameboxSupabase = sdk.createClient(config.url, config.anonKey);
})();
