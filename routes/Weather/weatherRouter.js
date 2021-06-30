const express = require("express");
const router = express.Router();

const {
    getAllLocations,
    addLocation,
    deleteLocationById
} = require("./controller/weatherController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json(true);
});

router.get("/get-all-searched-locations", getAllLocations)
router.post("/add-location", addLocation)
router.delete("/delete-location-by-id/:id", deleteLocationById)

module.exports = router;