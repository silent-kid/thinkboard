import mongoose from "mongoose";

// ! 1 - create a Schema

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

// ! 2 - make a model off of that Schema

const Note = mongoose.model("Note", noteSchema)

export default Note
