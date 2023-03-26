import { createButton, createDefaultInput, createDoctorInput } from './tools/index.js';
import { logo } from '../../../UI/index.js';

export class FormVisit {
    form = document.createElement('form');
    constructor({ params = '', idForm, modal }) {
        this.idForm = idForm;
        this.doctor = params?.doctor;
        this.params = params;
        this.modal = modal;
        this.formField = '';
    }

    renderElement() {
        const renderInput = createDefaultInput(this.params);
        const renderButton = createButton(this.idForm);

        this.form.classList.add('form-visit');
        this.form.id = this.idForm;
        this.form.insertAdjacentHTML('afterbegin', renderInput);
        this.form.append(renderButton);

        if (!!this.params) {
            this.renderInputDoctor();
        }

        this.actionSubmitForm();
        this.actionResetForm();
        this.actionChooseDoctor();

        return this.form;
    }

    renderInputDoctor(value) {
        const doctorInputsContainer = this.form.querySelector('.doctor-inputs');
        !!doctorInputsContainer && doctorInputsContainer.remove();

        let renderDoctorInput;

        if (!!value) {
            renderDoctorInput = createDoctorInput({ value });
        } else {
            renderDoctorInput = createDoctorInput({
                doctor: this.doctor,
                params: this.params,
            });
        }
        const textarea = this.form.querySelector('textarea');
        const parentNodeArea = textarea.parentNode;

        parentNodeArea.insertBefore(renderDoctorInput, textarea);
    }

    actionChooseDoctor() {
        const chooseDoctor = this.form.querySelector('#choose-doctor');
        chooseDoctor.addEventListener('change', e => {
            this.renderInputDoctor(e.target.value);
        });
    }

    actionSubmitForm() {
        this.form.addEventListener('submit', async event => {
            event.preventDefault();
            const formField = {};
            [...event.target.elements].forEach(item => {
                if (!!item.name) {
                    formField[item.name] = item.value;
                }
            });
            formField.creationTime = new Date().getTime();
            if (this.idForm === 'create-visit') {
                formField.status = false;
            }
            this.formField = formField;
            this.modal.close();
        });
    }

    actionResetForm() {
        this.form.addEventListener('reset', () => this.modal.close());
    }
}
