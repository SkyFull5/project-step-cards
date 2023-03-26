import { createCardForm } from './tools/index.js';

export class Card {
    card = document.createElement('div');

    constructor(patient = {}) {
        this.id = patient.id;
        this.firstName = patient.firstName || '';
        this.secondName = patient.secondName || '';
        this.fatherName = patient.fatherName || '';
        this.doctor = patient.doctor || 'N/A';
        this.complete = patient.status;
        this.urgency = patient.urgency || 'N/A';
    }
    render() {
        const name = !!this.firstName || !!this.secondName || !!this.fatherName ? `${this.secondName} ${this.firstName[0]}.${this.fatherName[0]}` : 'N/A';
        this.card.classList.add('card');
        this.card.setAttribute('data-card-id', this.id);
        this.card.innerHTML = createCardForm(name, this.doctor, this.id, this.complete, this.urgency);
        return this.card;
    }
}
