import express from "express";
import { getTanggapan, createTanggapan, getTanggapanById, updateTanggapan, deleteTanggapan } from "../controllers/tanggapanController.js";

const router = express.Router();

router.get("/tanggapan", getTanggapan);
router.post("/tanggapan", createTanggapan);
router.get("/tanggapan/:id", getTanggapanById);
router.put("/tanggapan/:id", updateTanggapan);
router.delete("/tanggapan/:id", deleteTanggapan);

export default router;