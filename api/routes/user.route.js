import express from "express";
import { deleteUser, getUser, getAllProfessionals, getAllCompanies, registerUser, editUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();


router.get("/professionals", getAllProfessionals)
router.get("/companies", getAllCompanies)
router.delete("/:id", verifyToken, deleteUser);
router.get("/:id", getUser);
router.patch("/editUser", editUser)
export default router;
