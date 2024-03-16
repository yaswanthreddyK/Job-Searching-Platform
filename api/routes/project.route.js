import express from "express";
import { addProject, deleteProject, editProject, getAllProjects } from "../controllers/project.controller.js";

const router = express.Router()

router.get("/", getAllProjects)
router.post("/addProject", addProject)
router.patch('/editProject', editProject)
router.delete('/deleteProject',deleteProject)
export default router