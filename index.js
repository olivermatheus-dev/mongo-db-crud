import * as dotenv from "dotenv";
import express from "express";

import { connectToDB } from "./config/db.config.js";
import { favmoviesRouter } from "./routes/favmovies.routes.js";

dotenv.config();
connectToDB();

const app = express(); //instanciando o express em uma variável para poder utilizar os métodos dele
app.use(express.json());

app.use("/favmovies", favmoviesRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
