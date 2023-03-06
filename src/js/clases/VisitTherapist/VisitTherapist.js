import { Visit } from "../Visit/Visit.js";

export class VisitTherapist extends Visit {
  constructor(
    firstName,
    secondName,
    fatherName,
    urgency,
    doctor,
    metaVisit,
    description,
    age
  ) {
    super(
      firstName,
      secondName,
      fatherName,
      urgency,
      doctor,
      metaVisit,
      description
    );
    this.age = age;
  }
}
