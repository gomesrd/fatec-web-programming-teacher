import Patient from "../models/patient";
import patientRepository from "../repositories/patientRepository";
import { Request,Response, NextFunction } from "express";

function getPatients(req: Request, res: Response, next: NextFunction) {
    const patients = patientRepository.getPatients();
    res.status(200).json(patients);
}

function addPatient(req: Request, res: Response, next: NextFunction) {
    const p = req.body as Patient;
    const patient = patientRepository.addPatient(p);

    res.status(201).json(patient);
}

function updatePatient(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);
    const p = req.body as Patient;

    const patient = patientRepository.updatePatient(id, p);

    if (patient)
        res.json(patient);
    else
        res.sendStatus(404);
}


export default {
    getPatients,
    addPatient,
    updatePatient
}