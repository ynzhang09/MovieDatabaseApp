const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const animeSchema = new Schema({
  title: { type: String, required: true },
  synopsis: { type: String, required: true},
  image_url: { type: String, required: true},
  start_date: { type: String, required: true},
  score: { type: Number, required: true},
  date: { type: Date, default: Date.now },
}, {
  timestamps: true,
});

const Anime = mongoose.model('Anime', animeSchema);

module.exports = Anime;