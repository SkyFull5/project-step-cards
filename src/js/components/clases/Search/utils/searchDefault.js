import { dropdown, input } from '../../../../UI/index.js';

export const searchDefault = [
    {
        type: 'text',
        name: 'title',
        placeholder: 'Пошук за Прізвищем',
        value: '',
        renderContent: props => input(props),
    },
    {
        type: 'dropdown',
        name: 'status',
        value: '',
        renderContent: props => dropdown(props),
        id: 'status-search',
        dropdownContent: [
            { value: '', title: 'Пошук за статусом', selected: '' },
            {
                value: true,
                title: 'Завершено',
                selected: '',
            },
            {
                value: false,
                title: 'Не завершено',
                selected: '',
            },
        ],
    },
    {
        type: 'dropdown',
        name: 'urgency',
        value: '',
        renderContent: props => dropdown(props),
        id: 'urgency-search',
        dropdownContent: [
            { value: '', title: 'Терміновість візиту', selected: '' },
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
];
