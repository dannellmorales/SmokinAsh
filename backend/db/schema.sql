DROP DATABASE IF EXISTS stogs_dev;
CREATE DATABASE stogs_dev;

\c stogs_dev;
-- This is the template for my sequel table 
CREATE TABLE stogs (
    id          SERIAL PRIMARY KEY,
    name        TEXT NOT NULL,
    vitola       TEXT NOT NULL,
    length      TEXT NOT NULL,
    gauge       INTEGER,
    strength    TEXT,
    is_favorite BOOLEAN,
    image       TEXT
);

