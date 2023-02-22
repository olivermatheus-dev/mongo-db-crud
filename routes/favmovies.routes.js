import express from "express";
import { MovieModel } from "../models/movie.model.js";
const favmoviesRouter = express.Router();

favmoviesRouter.post("/", async (req, res) => {
  try {
    const newFavMovie = await MovieModel.create({ ...req.body });
    return res.status(201).json(newFavMovie);
  } catch (err) {
    console.log(err);
  }
});

favmoviesRouter.get("/allfavmovies", async (req, res) => {
  try {
    const allFavMovie = await MovieModel.find();
    return res.status(201).json(allFavMovie);
  } catch (err) {
    console.log(err);
  }
});

export { favmoviesRouter };
