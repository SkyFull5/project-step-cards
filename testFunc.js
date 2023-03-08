import { FormVisit } from './src/js/clases/index.js';
import { Modal } from './src/js/clases/Modal/Modal.js';
import { fetchEditCard, fetchNewCard } from './src/js/tools/index.js';
import { fetchGetCard } from './src/js/tools/fetch/fetchGetCard.js';

const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

const props = {
    CardiovascularDiseases: 'Ні',
    age: 'asd',
    bodyMassIndex: 'asd',
    chooseDoctor: 'asd',
    description: 'asd',
    doctor: 'Cardiologist',
    fatherName: 'ads',
    firstName: 'asd',
    metaVisit: 'asd',
    normalPressure: 'asd',
    secondName: 'ads',
    urgency: 'Normal',
};

export const test = () => {
    btn.onclick = testFunc;
    btn2.onclick = testFunc2;
    btn3.onclick = testFunc3;
};

export const testFunc = e => {
    const idField = e.target.value;
    const testModal = new Modal({
        title: e.target.value,
        closable: true,
    });
    const test = new FormVisit();
    const render = test.renderElement(e.target.value);
    testModal.setContent(render);
    test.observerChooseDoctor();
    const form = document.querySelector(`#${e.target.value}`);

    !!form &&
        form.addEventListener('change', e => {
            if (e.target.id === 'choose-doctor') {
                test.renderInputDoctor(test.doctor);
            }
        });

    testModal.open();

    form.addEventListener('submit', async e => {
        e.preventDefault();

        const formField = {};

        [...e.target].forEach(({ name, value }) => {
            formField[name] = value;
        });
        testModal.close();
        test.removeCreateVisitForm(idField);

        const newCard = await fetchNewCard(formField);
        console.log(await newCard);
    });
};

const test6 = [];
const testFunc2 = async () => {
    const data = await fetchGetCard();
    console.log(data);
    const filter = data.res.find(item => item.id === 146866);

    test6.push(filter);
};

const testFunc3 = async e => {
    const idField = e.target.value;
    console.log(idField);
    const testModal = new Modal({
        title: e.target.value,
        closable: true,
    });
    const test = new FormVisit();
    const render = test.renderElement(e.target.value);
    testModal.setContent(render);
    test.observerChooseDoctor();
    const form = document.querySelector(`#${idField}`);

    !!form &&
        form.addEventListener('change', e => {
            if (e.target.id === 'choose-doctor') {
                test.renderInputDoctor(test.doctor);
            }
        });

    testModal.open();

    form.addEventListener('submit', async e => {
        e.preventDefault();

        const formField = {};

        [...e.target].forEach(({ name, value }) => {
            formField[name] = value;
        });
        testModal.close();
        test.removeCreateVisitForm(idField);

        const newCard = await fetchEditCard(test6[0].id, formField);
        console.log(await newCard);
    });
};
