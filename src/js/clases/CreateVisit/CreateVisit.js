import { inputDefaultVisit } from './utils/inputDefaultVisit.js';
import { inputDoctorVisit } from './utils/inputDoctorVisit.js';

export class CreateVisit {
    constructor(doctor = '') {
        this.doctor = doctor;
    }

    renderElement() {
        const render = inputDefaultVisit.map(item => {
            if (item.type === 'dropdown') {
                return item.renderContent(item);
            } else {
                return item.renderContent(item);
            }
        }).join('');
        return `<form id="form">${render}</form>`;
    }

    changeDoctor(value) {
        this.doctor = value;
    }

    renderInputDoctor(value) {
        const newInput = inputDoctorVisit.map(item => {
            if (item.value === value) {
                return item.content.map(content => {
                    if (content.type === 'text') {
                        return content.renderContent(content);
                    } else {
                        return content.renderContent(content);
                    }
                });
            }
        });
        const findingInputContent = newInput.find(item => !!item).join('');

        return `<div class="doctor-inputs">${!!findingInputContent && findingInputContent}</div> `;
    }
}
