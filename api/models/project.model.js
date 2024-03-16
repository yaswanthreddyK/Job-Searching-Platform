import mongoose, { Schema, model } from "mongoose";

const projectSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    avatarImage: {
        type: String,
    },
    projectURL: {
        type: String
    },
    owner: {
        type: mongoose.Types.ObjectId,
        required: true
    }
},{timestamps: true})

const Project = model('project', projectSchema)

export default Project