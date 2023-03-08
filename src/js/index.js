import { FormVisit } from './clases/index.js';
import { Visit } from './clases/Visit/Visit.js';
import { input } from './UI/index.js';

// const props = {
//     firstName: 'test1',
//     secondName: 'test2',
//     fatherName: 'test3',
//     urgency: 'High',
//     doctor: 'Therapist',
//     metaVisit: 'test6',
//     description: 'test7',
//     age: '12',
// };
export const testFunc = () => {
    const test = new FormVisit(); //props.doctor, props

    document.body.innerHTML = test.renderElement('create-visit');
    test.observerChooseDoctor();
    const form = document.querySelector('#create-visit');

    form.addEventListener('change', e => {
        if (e.target.id === 'choose-doctor') {
            test.renderInputDoctor(test.doctor);
        }
    });
};
