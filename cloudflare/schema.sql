CREATE TABLE IF NOT EXISTS game_download_clicks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    game_id TEXT NOT NULL CHECK (length(game_id) BETWEEN 1 AND 80),
    click_day TEXT NOT NULL DEFAULT (date('now')),
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_game_download_clicks_day ON game_download_clicks (click_day);
CREATE INDEX IF NOT EXISTS idx_game_download_clicks_game_day ON game_download_clicks (game_id, click_day);