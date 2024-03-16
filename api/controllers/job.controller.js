import { ObjectId } from "mongodb"
import Job from "../models/job.model.js"
import mongoose from "mongoose"


export const getAllJobs = async (req, res) => {
   try {
     const allJobs = await Job.find({}).exec()
     return res.status(200).send(allJobs)
   } catch (error) {
    console.log("Job Controller :: getAllJobs  Error:",error)
    return res.status(500).send(error.message || "Something went wrong.")
   }
}


export const createJob = async (req, res) => {
    try{
        const {title, description, deadline} = req.body
        if([title, description, deadline].find(field => field === "" || field === null || field === undefined)){
            return res.status(400).send("All mandatory fields are required!")
        }

        
      const job =  await Job.create({
            title,
            description,
            deadline: new Date(deadline),
            author: req.user._id,
            location: req.body.location || "",
            skillsRequired: req.body.skillsRequired || [],
            jobRole: req.body.jobRole || "",
            budget: req.body.budget || "",
            responsibilities: req.body.responsibilities || ""
        })

    const createdJob = await Job.findById(job._id)
    if(!createdJob){
        return res.status(500).send('Job creation failed!')
    }

    return res.status(201).send(`Job created successfully: ${createdJob.title}`)


    }catch(error){
      console.log("Job Controller :: createJob  Error:",error)
    return res.status(500).send(error.message || "Something went wrong.")
    }
}

export const deleteJob = async (req, res) => {
  const {jobId} = req.body

  if(!jobId) return res.status(400).send("All mandatory fields are required!")

  const result = await Job.deleteOne({_id: new ObjectId(jobId)})
  if(result.deletedCount === 0) return res.status(200).send('Nothing found to delete')

  return res.status(200).send("Job deleted Sucessfully!")
}