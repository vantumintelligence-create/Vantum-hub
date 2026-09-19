-- Per-IP rate limiting for /api/path-review. Stores a SHA-256 of the IP, never the IP.
CREATE TABLE IF NOT EXISTS path_review_hits (
  ip_hash TEXT NOT NULL,
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS path_review_hits_ip ON path_review_hits (ip_hash, created_at);
