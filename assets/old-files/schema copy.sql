DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev;

-- song table was originally listed first
-- album_id INTEGER REFERENCES albums (id)
--  ON DELETE CASCADE
-- would have to move below albums to avoid error

-- DROP TABLE IF EXISTS artists;


CREATE TABLE songs(
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 artist TEXT NOT NULL,
 album TEXT,
 time TEXT,
 is_favorite BOOLEAN,
 );
--  album_id INTEGER REFERENCES albums (id)
--  ON DELETE CASCADE,
--   artist_id INTEGER REFERENCES artists (id)
--  ON DELETE CASCADE




-- ALTERNATIVELY, ARTISTS SHOULD BE LISTED FIRST IF USED
-- CREATE TABLE artists (
--  id SERIAL PRIMARY KEY,
--  name TEXT,
--  album TEXT

--  song_id INTEGER REFERENCES songs (id)
--  ON DELETE CASCADE
-- );


-- DROP TABLE IF EXISTS albums;

-- CREATE TABLE albums (
--  id SERIAL PRIMARY KEY,
--  title TEXT,
--  artist TEXT,
--  year TEXT,
--  artist_id INTEGER REFERENCES artists (id)
--  ON DELETE CASCADE
-- );


---DROP TABLE IF EXISTS songs;

-- ALTERNATIVE SONGS TABLE FOR MANY TO ONE RELATIONSHIP WITH ARTISTS TABLE
-- CREATE TABLE songs(
--  id SERIAL PRIMARY KEY,
--  name TEXT NOT NULL,
--  artist TEXT NOT NULL,
--  album TEXT,
--  time TEXT,
--  is_favorite BOOLEAN,
-- --  album_id INTEGER REFERENCES albums (id)
-- --  ON DELETE CASCADE,
--   artist_id INTEGER REFERENCES artists (id)
--  ON DELETE CASCADE
-- );