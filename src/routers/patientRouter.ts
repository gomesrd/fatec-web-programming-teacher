import express from "express"
import patientController from "../controllers/patientController"

const router = express.Router();

router.get("/:id", patientController.getPatients);
router.get("/", patientController.getPatients);
router.post("/", patientController.addPatient);
router.patch("/:id", patientController.updatePatient);
router.delete("/:id")

export default router;