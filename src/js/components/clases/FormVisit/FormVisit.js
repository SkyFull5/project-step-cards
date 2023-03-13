import { createButton, createDefaultInput, createDoctorInput } from './tools/index.js';

export class FormVisit {
    constructor({ doctor = '', params = '', id }) {
        this.id = id;
        this.doctor = doctor;
        this.params = params;
    }

    renderElement() {
        const doctorInput = !!this.params && createDoctorInput({ doctor: this.doctor, params: this.params });

        const renderInput = createDefaultInput(this.params);

        const renderButton = createButton(this.id);

        return `<form class='form-visit' id='${this.id}'>${renderInput}${doctorInput}${renderButton}</form>`;
    }

    renderInputDoctor(value) {
        const textAreaInForm = document.querySelector('textarea');
        const doctorInputsContainer = document.querySelector('.doctor-inputs');

        !!doctorInputsContainer && doctorInputsContainer.remove();

        const renderDoctorInput = createDoctorInput({ value });

        textAreaInForm.insertAdjacentHTML('beforebegin', renderDoctorInput);
    }

    observerForm() {
        const doctorInputs = document.querySelector('#choose-doctor');
        doctorInputs.addEventListener('change', e => {
            this.renderInputDoctor(e.target.value);
            this.doctor = e.target.value;
        });
        this.observerButtonDisabled();
    }

    observerButtonDisabled() {
        const form = document.querySelector(`#${this.id}`);
        const button = document.querySelector('#button-submit');

        form.addEventListener('keydown', () => {
            const res = [...form].filter(item => item.tagName !== 'BUTTON').filter(item => !item.value);
            button.disabled = res[0];
        });
    }

    removeElement() {
        const form = document.querySelector(`#${this.id}`);
        form.remove();
    }
}
