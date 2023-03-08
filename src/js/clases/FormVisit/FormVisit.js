import { createButton, createDefaultInput, createDoctorInput } from './tools/index.js';

export class FormVisit {
    constructor(doctor = '', params = '', id) {
        this.id = id;
        this.doctor = doctor;
        this.params = params;
    }

    renderElement(idForm) {
        const doctorInput = createDoctorInput({ doctor: this.doctor, params: this.params });

        const renderInput = createDefaultInput(this.params);

        const renderButton = createButton(idForm);

        return `<form id='${idForm}'>${renderInput}${doctorInput}${renderButton}</form>`;
    }

    renderInputDoctor(value) {
        const textAreaInForm = document.querySelector('textarea');
        const doctorInputsContainer = document.querySelector('.doctor-inputs');

        !!doctorInputsContainer && doctorInputsContainer.remove();

        const renderDoctorInput = createDoctorInput({ value });

        textAreaInForm.insertAdjacentHTML('beforebegin', renderDoctorInput);
    }

    observerChooseDoctor() {
        const doctorInputs = document.querySelector('#choose-doctor');
        doctorInputs.addEventListener('change', e => {
            this.doctor = e.target.value;
        });
    }

    removeCreateVisitForm(idForm) {
        const form = document.querySelector(`#${idForm}`);
        form.remove();
    }
}
