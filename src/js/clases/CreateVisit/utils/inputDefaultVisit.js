import { dropdown, input, textarea } from '../../../UI/index.js';

export const inputDefaultVisit = [
    {
        type: 'text',
        name: 'firstName',
        placeholder: 'Ім’я',
        renderContent: props => input(props),
    },
    {
        type: 'dropdown',
        name: 'doctor',
        placeholder: 'Оберіть педіатра',
        renderContent: props => dropdown(props),
        id: 'choose-doctor',
        dropdownContent: [
            { value: '', title: 'Оберіть педіатра' },
            {
                value: 'Cardiologist',
                title: 'Кардіолог',
            },
            {
                value: 'Dentist',
                title: 'Стоматолог',
            },
            {
                value: 'Therapist',
                title: 'Терапевт',
            },
        ],
    },
    {
        type: 'text',
        name: 'secondName',
        placeholder: 'Фамілія',
        renderContent: props => input(props),
    },
    {
        type: 'dropdown',
        name: 'urgency',
        placeholder: 'Терміновість',
        renderContent: props => dropdown(props),
        id: 'urgency',
        dropdownContent: [
            { value: '', title: 'Терміновість' },
            {
                value: 'High',
                title: 'Невідкладна',
            },
            {
                value: 'Normal',
                title: 'Пріоритетна',
            },
            {
                value: 'Low',
                title: 'Звичайна',
            },
        ],
    },
    {
        type: 'text',
        name: 'fatherName',
        placeholder: "Ім'я по батькові",
        renderContent: props => input(props),
    },
    {
        type: 'text',
        name: 'metaVisit',
        placeholder: 'Мета візиту',
        renderContent: props => input(props),
    },
    {
        type: 'text',
        name: 'description',
        placeholder: 'Короткий опис візиту',
        renderContent: props => textarea(props),
    },
];
