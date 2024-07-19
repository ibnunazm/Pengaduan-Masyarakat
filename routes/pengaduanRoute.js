import express from "express";
import { getPengaduan, createPengaduan, getPengaduanById, updatePengaduan, deletePengaduan,callTampilanPengaduan, sortpengaduanbyjudul } from "../controllers/pengaduanController.js";

const router = express.Router();

router.get("/pengaduan", getPengaduan);
router.post("/pengaduan", createPengaduan);
router.get("/pengaduan/:id", getPengaduanById);
router.put("/pengaduan/:id", updatePengaduan);
router.delete("/pengaduan/:id", deletePengaduan);
router.get("/tampilanpengaduan", callTampilanPengaduan);
router.get("/sortpengaduan", sortpengaduanbyjudul);

export default router;