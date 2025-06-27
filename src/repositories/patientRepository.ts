import Patient from "../models/patient";

const patients: Patient[] = []; // Meu banco de dados

function getPatients() : Patient[] {
    return patients;
}

function addPatient(p: Patient) : Patient {
    const patient = new Patient(p.code, p.name);
    patients.push(patient);

    return patient;
}

function updatePatient(id: number, p: Patient) : Patient | undefined {
    const index = patients.findIndex(item => item.id === id);

    if (index === -1)
        return undefined;

    patients[index].code = p.code;
    patients[index].name = p.name;

    return patients[index];
}

export default {
    getPatients,
    addPatient,
    updatePatient
}