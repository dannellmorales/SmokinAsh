DROP DATABASE IF EXISTS stogs_dev;
CREATE DATABASE stogs_dev;

\c stogs_dev;

CREATE TABLE stogs (
    id          SERIAL PRIMARY KEY,
    name        TEXT NOT NULL,
    brand       TEXT NOT NULL,
    length      TEXT NOT NULL,
    gauge       INTEGER,
    strength    TEXT,
    vintage     INTEGER
);

