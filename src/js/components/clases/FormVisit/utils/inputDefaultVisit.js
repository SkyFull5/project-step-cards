import { dropdown, input, textarea } from '../../../../UI/index.js';

export const inputDefaultVisit = [
    {
        type: 'text',
        name: 'firstName',
        placeholder: 'Ім’я',
        value: '',
        renderContent: props => input(props),
    },
    {
        type: 'dropdown',
        name: 'doctor',
        placeholder: 'Оберіть лікаря',
        value: '',
        renderContent: props => dropdown(props),
        id: 'choose-doctor',
        dropdownContent: [
            { value: '', title: 'Оберіть лікаря' },
            {
                value: 'Cardiologist',
                title: 'Кардіолог',
                selected: '',
            },
            {
                value: 'Dentist',
                title: 'Стоматолог',
                selected: '',
            },
            {
                value: 'Therapist',
                title: 'Терапевт',
                selected: '',
            },
        ],
    },
    {
        type: 'text',
        name: 'secondName',
        placeholder: 'Прізвище',
        value: '',
        renderContent: props => input(props),
    },
    {
        type: 'dropdown',
        name: 'urgency',
        placeholder: 'Терміновість',
        value: '',
        renderContent: props => dropdown(props),
        id: 'urgency',
        dropdownContent: [
            { value: '', title: 'Терміновість' },
            {
                value: 'High',
                title: 'Невідкладна',
                selected: '',
            },
            {
                value: 'Normal',
                title: 'Пріоритетна',
                selected: '',
            },
            {
                value: 'Low',
                title: 'Звичайна',
                selected: '',
            },
        ],
    },
    {
        type: 'text',
        name: 'fatherName',
        placeholder: 'По батькові',
        value: '',
        renderContent: props => input(props),
    },
    {
        type: 'text',
        name: 'metaVisit',
        placeholder: 'Мета візиту',
        value: '',
        renderContent: props => input(props),
    },
    {
        type: 'text',
        name: 'description',
        placeholder: 'Короткий опис візиту',
        value: '',
        renderContent: props => textarea(props),
    },
];
