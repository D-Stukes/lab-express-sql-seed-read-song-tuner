const db = require("../db/dbConfig.js");

//INDEX
const getAllAlbums = async () => {
    try {
      const allAlbums = await db.any('SELECT * FROM albums');
      return allAlbums;
    } catch (error) {
      return error;
    }
  };

//SHOW
const getAlbum = async (id) => {
  try {
    const oneAlbum = await db.one("SELECT * FROM albums WHERE id=$1", id);
    return oneAlbum;
  } catch (error) {
    return error;
  }
}

//CREATE 
const createAlbum = async (album) => {
try {
const newAlbum = await db.one( "INSERT INTO albums(title, artist) VALUES($1, $2, $3) RETURNING *",
[album.title, album.artist, album.year,artist.id, album.song_id ]
);

  return newAlbum;
  } catch (error) {
    return error;
  }}


//DELETE
const deleteAlbum = async (id) => {
  try {
    const deletedAlbum = await db.one(
      "DELETE FROM albums WHERE id = $1 RETURNING *",
      id
    );
    return deletedAlbum;
  } catch (error) {
    return error
  }
};

//UPDATE
const updateAlbum = async (id, song) => {
  try {
  const updatedAlbum= await db.one( 
      "UPDATE albums SET title=$1, artist=$2, year=$3 WHERE id=$4 RETURNING *",
  [album.title, album.artist, album.year, id ]
  );
  return updatedAlbum;
  } catch (error) {
    return error;
  };

};

module.exports = { getAllAlbums, getAlbum, createAlbum, deleteAlbum, updateAlbum }