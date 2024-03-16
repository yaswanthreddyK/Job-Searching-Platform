import mongoose, { Schema, model } from "mongoose";

const jobSchema = new Schema({
    title: {
       type: String,
       required: true
    },
    description: {
        type: String,
        required: true
    },
    skillsRequired: [
        String
    ],
    location: {
        city: {
            String
        },
        country: {
            String
        },
        remote: {
            type: Boolean,
            default: false
        }
    },
    jobRole: {
        type: String
    },
    budget: {
        min: {
            type: Number
        },
        max: {
            type: Number
        }
    },
    responsibilities: {
        type: String
    },
    deadline: {
        type: Date
    },
    author: {
       type: mongoose.Types.ObjectId,
       required: true
   },
},{timestamps: true})

const Job = model('job', jobSchema)

export default Job