const express = require("express");
const albums = express.Router();
const { checkName, checkBoolean, validateURL } = require("../validations/checkSongs");
const { 
  getAllAlbums, 
  getAlbum, 
  createAlbum, 
  deleteAlbum, 
  updateAlbum } = require("../queries/albums");

// INDEX
albums.get("/", async (req, res) => {
  const allAlbums = await getAllAlbums();
  if (allAlbums[0]) {
    res.status(200).json(allAlbums);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

//SHOW
albums.get("/:id", async (req, res) => {
  const { id } = req.params;
  const album = await getAlbum(id)
  console.log("album", album);
  if (!album.message) {
    res.status(200).json(album);
  } else {
    res.status(400).json({error : "not found "})
  }
});

//CREATE
songs.post("/", checkName, checkBoolean, async (req, res) => {
  try {
    const album = await createAlbum(req.body);
    res.status(200).json(album)
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//DELETE
albums.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedAlbum = await deleteAlbum(id);
  if (deletedAlbum.id) {
     res.status(200).json(deletedAlbum);
  } else {
    res.status(400).json("Album not found");
  }
});

//UPDATE
albums.put("/:id", checkName, checkBoolean, async (req, res) => {
  const { id } = req.params;
  const updatedAlbum = await updateAlbum(id, req.body);
  res.status(200).json(updatedAlbum);
});


module.exports = albums;