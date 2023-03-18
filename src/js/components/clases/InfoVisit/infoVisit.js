import { addRow } from './tools/addRow.js';
import {doctors} from '../utils/doctorsInfo.js';
import {urgencies} from '../utils/urgencyInfo.js';

export class InfoVisit {
    constructor(card = {}) {
        this.card = {
            description: null,
            normalPressure: null,
            cardiovascularDiseases: null,
            lastVisitDate: null,
            age: null,
            ...card,
        };
    }

    render() {
        const container = document.createElement('div');
        container.className = 'info';

        addRow('ПІБ:', `${this.card.secondName} ${this.card.firstName} ${this.card.fatherName}`, container);
        addRow('Лікар:', `${doctors[this.card.doctor]}`, container);
        addRow('Мета візиту:', this.card.metaVisit, container);
        addRow('Терміновість:', urgencies[this.card.urgency], container);
        addRow('Статус:', !!this.card.status ? 'Завершено' : 'Не завершено', container);

        if (this.card.doctor === 'Cardiologist') {
            addRow('Вік:', this.card.age, container);
            addRow('Індекс маси тіла:', this.card.bodyMassIndex, container);
            addRow('Звичайний тиск:', this.card.normalPressure, container);
            addRow('Серцево-судинні захворювання:', this.card.CardiovascularDiseases === 'true' ? 'Так' : 'Ні', container);
        } else if (this.card.doctor === 'Dentist') {
            addRow('Дата останнього відвідування:', this.card.dataLastVisit, container);
        } else if (this.card.doctor === 'Therapist') {
            addRow('Вік:', this.card.age, container);
        }

        addRow('Короткий опис візиту:', this.card.description, container);

        return container;
    }
}
