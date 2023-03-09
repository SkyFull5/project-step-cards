import { input } from '../../../UI/index.js';
import { inputDefaultVisit } from '../FormVisit/utils/inputDefaultVisit.js';

export class Visit {
    constructor(props) {
        const { id, firstName, secondName, fatherName, urgency, doctor, metaVisit, description } = props;
        this.id = id;
        this.firstName = firstName;
        this.secondName = secondName;
        this.fatherName = fatherName;
        this.urgency = urgency;
        this.doctor = doctor;
        this.metaVisit = metaVisit;
        this.description = description;
        this.params = this.getParams();
    }

    getParams() {
        const params = [];

        for (let prop in this) {
            params.push({ [prop]: this[prop] });
        }

        return params;
    }

    render() {}
}
