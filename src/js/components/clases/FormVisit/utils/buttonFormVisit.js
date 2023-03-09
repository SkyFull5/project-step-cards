import { button } from '../../../../UI/index.js';

export const buttonFormVisit = [
    {
        form: 'create-visit',
        buttons: [
            {
                type: 'submit',
                id: 'form-submit',
                title: 'Створити',
                renderContent: props => button(props),
            },
            {
                type: 'submit',
                id: 'form-close',
                title: 'Скасувати',
                renderContent: props => button(props),
            },
        ],
    },
    {
        form: 'editing-visit',
        buttons: [
            {
                type: 'submit',
                id: 'form-submit',
                title: 'Зберегти',
                renderContent: props => button(props),
            },
            {
                type: 'submit',
                id: 'form-close',
                title: 'Скасувати',
                renderContent: props => button(props),
            },
        ],
    },
];
