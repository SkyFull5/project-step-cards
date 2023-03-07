import { Visit } from '../Visit/Visit.js';

export class VisitTherapist extends Visit {
    constructor(props) {
        const { id, firstName, secondName, fatherName, urgency, doctor, metaVisit, description, age } = props;
        super(id, firstName, secondName, fatherName, urgency, doctor, metaVisit, description);
        this.age = age;
    }
}
