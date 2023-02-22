import mongoose from "mongoose";

export async function connectToDB() {
  try {
    mongoose.set("strictQuery", false);

    const dbConnect = await mongoose.connect(
      `mongodb://127.0.0.1:27017/favmovies`
    );
    //mongodb://127.0.0.1:27017/favmovies
    console.log("Connect sucessfully");
    console.log(dbConnect.connection.name); // esperamos que retorne o nome do banco de dados que nos conectamos
  } catch (err) {
    console.log("Error connecting to DB");
    console.log(err);
  }
}
