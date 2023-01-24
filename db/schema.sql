DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev;

CREATE TABLE songs(
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 artist TEXT NOT NULL,
 album TEXT,
 time TEXT,
 is_favorite BOOLEAN
);


DROP TABLE IF EXISTS artists;

CREATE TABLE artists (
 id SERIAL PRIMARY KEY,
 name TEXT,
 album TEXT,
 song_id INTEGER REFERENCES songs (id)
 ON DELETE CASCADE
);


DROP TABLE IF EXISTS albums;

CREATE TABLE albums (
 id SERIAL PRIMARY KEY,
 title TEXT,
 artist TEXT,
 year TEXT,
 artist_id INTEGER REFERENCES artists (id)
 ON DELETE CASCADE,
 song_id INTEGER REFERENCES songs (id)
 ON DELETE CASCADE
);
