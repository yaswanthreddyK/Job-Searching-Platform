import express from "express"
import { createJob, deleteJob, getAllJobs } from "../controllers/job.controller.js"

const router = express.Router()

router.get("/", getAllJobs)
router.post("/createJob", createJob)
router.delete("/deleteJob", deleteJob)

export default router