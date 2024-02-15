import 'dotenv/config'

import mongoose from "mongoose";
export default async function main() {

  try {
    mongoose.set("strictQuery", true)

    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.aqatjv5.mongodb.net/?retryWrites=true&w=majority`)

    console.log("Conectado")

  } catch (error) {
    console.log(error)
  }
}
