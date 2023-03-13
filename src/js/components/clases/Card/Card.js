import {createCardForm} from './tools/index.js';

export class Card {

    card = document.createElement('div')

    constructor(patient) {
        this.id = patient.id;
        this.firstName = patient.firstName;
        this.secondName = patient.secondName;
        this.fatherName = patient.fatherName;
        this.doctor = patient.doctor;
    }
    render() {
        const name = `${this.secondName} ${this.firstName[0]}.${this.fatherName[0]}`
        this.card.classList.add('card');
        this.card.setAttribute('data-card-id', this.id);
        this.card.innerHTML = createCardForm(name, this.doctor, this.id);
        return this.card;
    }

}