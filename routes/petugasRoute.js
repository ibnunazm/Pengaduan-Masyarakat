import express from "express";
import { getPetugas, createPetugas, getPetugasById, updatePetugas, deletePetugas, sumPetugas } from "../controllers/petugasController.js";

const router = express.Router();

router.get("/petugas", getPetugas);
router.post("/petugas", createPetugas);
router.get("/petugas/:id", getPetugasById);
router.put("/petugas/:id", updatePetugas);
router.delete("/petugas/:id", deletePetugas);
router.get("/sumpetugas", sumPetugas);

export default router;