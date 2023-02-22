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
    return res.status(200).json(allFavMovie);
  } catch (err) {
    console.log(err);
  }
});

favmoviesRouter.get("/favmovie/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const favMovie = await MovieModel.findById(id);

    if (!favMovie) {
      return res.status(404).json("Filme não encontrado"); // se não for encontrado, a função da return aqui e acaba sua execução
    }
    return res.status(201).json(favMovie);
  } catch (err) {
    console.log(err);
  }
});

export { favmoviesRouter };
