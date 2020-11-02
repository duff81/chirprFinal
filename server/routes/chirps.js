const express = require("express");
const chirpStore = require("../chirpstore");

let router = express.Router();

router.get("/:id?", (req, res) => {
  let id = req.params.id;
  if (id) {
    res.json(chirpStore.GetChirp(id));
  } else {
    res.send(chirpStore.GetChirps());
  }
});

router.post("/", (req, res) => {
  chirpStore.CreateChirp(req.body);
  res.sendStatus(200);
  res.send("You did it!");
});

router.put("/:id?", (req, res) => {
  let id = req.params.id;
  let editChrip = req.body;
  chirpStore.UpdateChirp(id, editChrip);
  res.send("Smart change!");
});

router.delete("/", (req, res) => {
  let id = req.params.id;
  chirpStore.DeleteChirp(id);
  res.send("don't worry we won't tell anyone...");
});

module.exports = router;
