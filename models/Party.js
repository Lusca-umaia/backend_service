import mongoose from "mongoose";
import { serviceSchema } from "./Service.js";

const { Schema } = mongoose;

const partySchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    budget: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true
    },
    services: {
      type: [serviceSchema],
    },
  }
  ,
  { timestamps: true }
)

export const Party = mongoose.model("Party", partySchema)
