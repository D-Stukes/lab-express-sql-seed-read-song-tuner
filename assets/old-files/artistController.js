const express = require("express");
const artists = express.Router();

const { checkName, checkBoolean, validateURL } = require("../validations/checkSongs");
const { 
  getAllArtists, 
  getArtist, 
  createArtist, 
  deleteArtist, 
  updateArtist } = require("../queries/artists");

  //Import songController
  const songController = require('./songController')
  // const albumController = require('./albumController')

//MIDDLEWARE
artists.use('/:artistId/songs', songController)


// INDEX
artists.get("/", async (req, res) => {
  const allArtists = await getAllArtists();
  if (allArtists[0]) {
    res.status(200).json(allArtists);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

//SHOW
artists.get("/:id", async (req, res) => {
  const { id } = req.params;
  const artist = await getArtist(id)
  console.log("artist", artist);
  if (!artist.message) {
    res.status(200).json(artist);
  } else {
    res.status(404).json({error : "not found "})
  }
});

//CREATE
artists.post("/", checkName, checkBoolean, async (req, res) => {
  try {
    const artist = await createArtist(req.body);
    res.status(200).json(artist)
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//DELETE
artists.delete("/:id", async (req, res) => {
  try{
  const { id } = req.params;
  const deletedArtist = await deleteArtist(id);
     res.status(200).json(deletedArtist);
  } catch (error) {
    res.status(400).json("Artist not found");
  }
});

//UPDATE
artists.put("/:id", checkName, checkBoolean, async (req, res) => {
  try {
  const { id } = req.params;
  const updatedArtist = await updateArtist(id, req.body);
  res.status(200).json(updatedArtist)
  } catch (error) {
    res.status(404).json({ error: "Artist not found" })
  }
});


module.exports = artists;