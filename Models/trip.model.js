const mongoose = require("mongoose");

const tripSchma = mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  destination: { type: String, require: true },
  travels: { type: Number, require: true },
  budget: { type: String, require: true },
});

const TripModel =mongoose.model("trip",tripSchma)

module.exports={
    TripModel
}