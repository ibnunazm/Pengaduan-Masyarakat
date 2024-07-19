import express from "express";
import { getMasyarakat, createMasyarakat, getMasyarakatById, updateMasyarakat, deleteMasyarakat } from "../controllers/masyarakatController.js";

const router = express.Router();

router.get("/masyarakat", getMasyarakat);
router.post("/masyarakat", createMasyarakat);
router.get("/masyarakat/:id", getMasyarakatById);
router.put("/masyarakat/:id", updateMasyarakat);
router.delete("/masyarakat/:id", deleteMasyarakat);

export default router;