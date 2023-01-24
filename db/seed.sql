
\c songs_dev;

INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
('Fame', 'David Bowie', 'Young Americans', '4:12', true),
('Once in a Lifetime', 'Talking Heads', 'Remain in Light', '4:19', true),
('The Great Curve', 'Talking Heads', 'Sand in the Vaseline', '5:39', true),
('(Nothing But) Flowers)', 'Talking Heads', 'Remain in Light', '6:28', true),
('Books about UFOs', 'Hüsker Dü', 'New Day Rising', '3:31', false),
('Mr. Startup', 'Wolf Parade', 'Thin Mind', '5:39', true),
('We Got the World', 'Icona Pop', 'This is...', '3:17', false);

INSERT INTO artists (song_id, name)
VALUES
('1', 'Best of BeBe and CeCe Winans'),
('2', 'Young Americans'),
('3', 'Talking Heads'),
('5', 'Hüsker Dü'),
('6', 'Wolf Parade'),
('7', 'Icona Pop');

INSERT INTO album (artist_id, song_id, album, artist, year)
VALUES
('1', '1', 'Best of BeBe and CeCe Winans', 'BeBe and CeCe Winans', '1985'),
('2', '2', 'Stevie Wonder - Original Musiquarium I', 'Stevie Wonder', '1970'),
('3', '3', 'Remain in Light', 'Talking Heads', '1978'),
('4', '4', 'Sand in the Vaseline', 'Talking Heads', '1974'),
('5', '5', 'New Day Rising', 'Hüsker Dü', '1971'),
('6', '6', 'This is...', 'Icona Pop', '1960');
