const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  rname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  packages: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  image: {
    type: String,
    require: true,
  },
  update: {
    type: String,
    require: false,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
