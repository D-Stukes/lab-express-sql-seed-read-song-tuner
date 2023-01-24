const express = require("express");
const albums = express.Router();
const { checkName, checkBoolean, validateURL } = require("../validations/checkSongs");
const { 
  getAllArtists, 
  getArtist, 
  createArtist, 
  deleteArtist, 
  updateArtist } = require("../queries/artists");

// INDEX
artist.get("/", async (req, res) => {
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
    res.status(400).json({error : "not found "})
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
  const { id } = req.params;
  const deletedArtist = await deleteArtist(id);
  if (deletedArtist.id) {
     res.status(200).json(deletedArtist);
  } else {
    res.status(400).json("Artist not found");
  }
});

//UPDATE
songs.put("/:id", checkName, checkBoolean, async (req, res) => {
  const { id } = req.params;
  const updatedArtist = await updateArtist(id, req.body);
  res.status(200).json(updatedArtist);
});


module.exports = artists;