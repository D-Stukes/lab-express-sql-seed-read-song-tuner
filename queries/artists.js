const db = require("../db/dbConfig.js");

//INDEX
const getAllArtists = async () => {
    try {
      const allArtists = await db.any('SELECT * FROM Artists');
      return allArtists;
    } catch (error) {
      return error;
    }
  };

//SHOW
const getArtist = async (id) => {
  try {
    const oneArtist = await db.one("SELECT * FROM artists WHERE id=$1", id);
    return oneArtist;
  } catch (error) {
    return error;
  }
}

//CREATE 
const createArtist = async (artist) => {
try {
const newArtist = await db.one( "INSERT INTO artists(name, album) VALUES($1, $2) RETURNING *",
[artist.name, artist.album, song_id]
);
  return newArtist;
  } catch (error) {
    return error;
  }
}

//DELETE
const deleteArtist = async (id) => {
  try {
    const deletedArtist = await db.one(
      "DELETE FROM artists WHERE id = $1 RETURNING *",
      id
    );
    return deletedArtist;
  } catch (error) {
    return error
  }
};

//UPDATE
const updateArtist = async (id, artist) => {
  try {
  const updatedArtist = await db.one( 
      "UPDATE artists SET name=$1, album=$2, WHERE id=$3 RETURNING *",
  [artist.name, artist.album ]
  );
  return updatedArtist;
  } catch (error) {
    return error;
  };

};

module.exports = { getAllArtists, getArtist, createArtist, deleteArtist, updateArtist }