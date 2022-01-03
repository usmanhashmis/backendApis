var express = require("express");
var router = express.Router();
var Shari = require("../models/shari.js");

/* GET users listing. */
router.post("/", async function (req, res) {
  console.log("hit");
  try {
    var shari = new Shari(req.body);
    await shari.save();
    res.send(shari);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async function (req, res) {
  const use = await Shari.find();
  res.send(use);
});
router.get("/:id", async function (req, res) {
  console.log("getting");
  const use = await Shari.findById(req.params.id);
  res.send(use);
});

router.put("/:id", async function (req, res) {
  console.log("updating");
  console.log(req.body.shar);
  const edit = req.body;
  const use = await Shari.findByIdAndUpdate(req.params.id, edit);
  await use.save();
  res.send(use);
});

router.delete("/:id", async function (req, res) {
  console.log("delete");
  console.log(req.params.id);
  await Shari.findByIdAndDelete(req.params.id);

  return res.send("deleted");
});
module.exports = router;
