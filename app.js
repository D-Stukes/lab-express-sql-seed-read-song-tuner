 
 // DEPENDENCIES
 const cors = require("cors");
 const express = require("express");
 const songController = require("./controllers/songController.js");
 //const artistController = require("./controllers/artistController.js");
 
 // CONFIGURATION
 const app = express();
 
 // MIDDLEWARE
 app.use(cors());
 app.use(express.json());
 app.use("/songs", songController)
 //app.use("/artists", artistController)
 
 // ROUTES
 app.get("/", (req, res) => {
   res.send("Welcome to The Tuner App");
 });
 
 // 404 PAGE
 app.get("*", (req, res) => {
     res.status(404).send("Page not found");
   });
 
 // EXPORT
 module.exports = app;