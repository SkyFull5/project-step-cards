import { inputDefaultVisit } from './utils/inputDefaultVisit.js';
import { inputDoctorVisit } from './utils/inputDoctorVisit.js';

export class CreateVisit {
    constructor(doctor = '') {
        this.doctor = doctor;
    }

    renderElement() {
        const render = inputDefaultVisit.map(item => item.renderContent(item)).join('');
        return `<form id='form-create-visit'>${render}</form>`;
    }

    renderInputDoctor(value) {
        const textArea = document.querySelector('textarea');
        const doctorInputs = document.querySelector('.doctor-inputs');

        !!doctorInputs && doctorInputs.remove();

        const newInput = inputDoctorVisit.map(item => {
            if (item.value === value) {
                return item.content.map(content => content.renderContent(content));
            }
        });
        const findingInputContent = newInput?.find(item => !!item)?.join('');

        const newHtmlDoctorInput = !!findingInputContent ? `<div class='doctor-inputs'>${findingInputContent}</div> ` : '';

        textArea.insertAdjacentHTML('beforebegin', newHtmlDoctorInput);
    }

    observerChooseDoctor() {
        const doctorInputs = document.querySelector('#choose-doctor');
        doctorInputs.addEventListener('change', e => {
            this.doctor = e.target.value;
        });
    }

    removeCreateVisitForm() {
        const form = document.querySelector('#form-create-visit');
        form.remove();
    }
}
