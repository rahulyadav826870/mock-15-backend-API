const express = require("express");
const { TripModel } = require("../Models/trip.model");

const tripRoutes = express.Router();

tripRoutes.get("/", async (req, res) => {
  try {
    let query = {};

    if (req.query.destination) {
      query.destination = req.query.destination;
    }

    let sort = {};
    if (req.query.sortBy) {
      let first = req.query.sortBy.split(":");
      sort[first[0]] =
        first[1] === "desc"
          ? -1
          : first[1] === "asc"
          ? 1
          : "wright asc or desc only in url for sorting";
    }
    const trip = await TripModel.find(query).sort(sort);
    res.send(trip);
  } catch (error) {
    res.send({ msg: "something wrong ", "error is": error.message });
  }
});

tripRoutes.post("/post", async (req, res) => {
  try {
    const trip = new TripModel(req.body);
    await trip.save();
    res.send({ msg: "Trip is Posted" });
  } catch (error) {
    res.send({ msg: "something wrong ", "error is": error.message });
  }
});

module.exports = {
  tripRoutes,
};
