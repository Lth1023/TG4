const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).send({
    title: "PPADS",
    HenriqueHuang:42103894,
    PauloGoma:42123046, 
    JianFengChen: 42126436,
    Leo:4
  },);
});

module.exports = router;
