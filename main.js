import './style.scss';
import { testFunc } from './src/js/index.js';
import {Modal} from './src/js/clases/Modal/Modal.js';
import {CreateVisit} from './src/js/clases/index.js';

// testFunc();

const btn = document.querySelector('.btn1')

const testBtn = new Modal ({
    title: 'Test Modal',
    closable: true,
    footerButtons: [
        {
        text: 'Закрыть', type: 'submit', form: 'form-create-visit', handler (e) {
            e.preventDefault()
            const form = this.form;
            const newAppointment = {};
            [...form].forEach( ({value,name}) => {
                newAppointment[name] = value;
            })
                console.log(newAppointment);

            form.reset();

        }

        }
    ]
})

btn.addEventListener('click', e => {
    testBtn.open()


    const test = new CreateVisit();
    testBtn.setContent(test.renderElement())
    // test.renderElement();
    test.observerChooseDoctor();
    const form = document.querySelector('#form-create-visit');

    form.addEventListener('change', e => {
        if (e.target.id === 'choose-doctor') {
            test.renderInputDoctor(test.doctor);
        }
    });


})