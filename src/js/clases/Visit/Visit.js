import {
  inputDefaultVisit,
  inputVisitDoctor,
} from "../CreateVisit/utils/inputDefaultVisit.js";

export class Visit {
  constructor(
    firstName,
    secondName,
    fatherName,
    urgency,
    doctor,
    metaVisit,
    description
  ) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.fatherName = fatherName;
    this.urgency = urgency;
    this.doctor = doctor;
    this.metaVisit = metaVisit;
    this.description = description;
  }
}
