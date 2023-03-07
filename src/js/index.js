import { CreateVisit } from './clases/index.js';
import { Visit } from './clases/Visit/Visit.js';
import { input } from './UI/index.js';

const props = {
    firstName: 'test1',
    secondName: 'test2',
    fatherName: 'test3',
    urgency: 'test4',
    doctor: 'test5',
    metaVisit: 'test6',
    description: 'test7',
};
export const testFunc = () => {
    const newVisit = new Visit(props);

    console.log(newVisit);
    newVisit.getParams();
    newVisit.render();

    const test = new CreateVisit();

    document.body.innerHTML = test.renderElement();
    test.observerChooseDoctor();
    const form = document.querySelector('#form-create-visit');

    form.addEventListener('change', e => {
        if (e.target.id === 'choose-doctor') {
            test.renderInputDoctor(test.doctor);
        }
    });
};
