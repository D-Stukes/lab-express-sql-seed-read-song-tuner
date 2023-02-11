const express = require("express");
const songs = express.Router()
// const songs = express.Router({ mergeParams: true});
const { checkName, checkBoolean, validateURL } = require("../validations/checkSongs");
const { 
  getAllSongs, 
  getSong, 
  createSong, 
  deleteSong, 
  updateSong } = require("../queries/songs");

  // const artistController = require('./artistController')
  //   const albumController = require('./albumController')

    //MIDDLEWARE
    // songs.use('/:songId/artists', artistController)
    // songs.use('/:songId/albums', albumController)


  
// INDEX

  songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();
    if (allSongs[0]) {
      res.status(200).json(allSongs);
    } else {
   res.status(500).json({ error: "server error" });
    }
  });

// songs.get("/", async (req, res) => {
//   const { artistId  } = req.params //testing merge
//   try  {
//     const allSongs = await getAllSongs(artistId);
//     res.status(200).json(allSongs);
//   } catch (error) {
//     res.status(500).json({ error: "server error" });
//   }});

//SHOW
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id)
  console.log("song", song);
  if (!song.message) {
    res.status(200).json(song);
  } else {
    res.status(400).json({error : "not found "})
  }
});

//CREATE
songs.post("/", checkName, checkBoolean, async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.status(200).json(song)
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//DELETE
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
     res.status(200).json(deletedSong);
  } else {
    res.status(400).json("Song not found");
  }
});

//UPDATE
songs.put("/:id", checkName, checkBoolean, async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSong = await updateSong(id, req.body);
    res.status(200).json(updatedSong);
    console.log('changed song',req.body)
} catch(error) {
  res.status(404).json({error: "id not found"})}
});


module.exports = songs;