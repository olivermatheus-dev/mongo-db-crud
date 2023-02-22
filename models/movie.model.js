import { Schema, model } from "mongoose";

const movieSchema = new Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  director: { type: String },
  genre: { type: String },
  rating: { type: Number },
  description: { type: String },
});
export const MovieModel = model("Movie", movieSchema);
