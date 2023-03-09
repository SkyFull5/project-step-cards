import { checkbox, input } from '../../../../UI/index.js';

export const inputDoctorVisit = [
    {
        value: 'Cardiologist',
        content: [
            {
                type: 'text',
                name: 'age',
                placeholder: 'Вік',
                value: '',
                renderContent: props => input(props),
            },
            {
                type: 'text',
                name: 'bodyMassIndex',
                placeholder: 'Індекс маси тіла',
                value: '',
                renderContent: props => input(props),
            },
            {
                type: 'text',
                name: 'chooseDoctor',
                placeholder: 'Оберіть педіатра',
                value: '',
                renderContent: props => input(props),
            },
            {
                type: 'text',
                name: 'normalPressure',
                placeholder: 'Звичайний тиск',
                value: '',
                renderContent: props => input(props),
            },
            {
                type: 'radio',
                title: 'Серцево-судинні захворювання',
                name: 'CardiovascularDiseases',
                value: '',
                content: [
                    {
                        type: 'radio',
                        value: 'true',
                        name: 'CardiovascularDiseases',
                        checked: '',
                    },
                    {
                        type: 'radio',
                        value: 'false',
                        name: 'CardiovascularDiseases',
                        checked: '',
                    },
                ],
                renderContent: props => checkbox(props),
            },
        ],
    },

    {
        value: 'Therapist',
        content: [
            {
                type: 'text',
                name: 'age',
                placeholder: 'Вік',
                value: '',
                renderContent: props => input(props),
            },
        ],
    },
    {
        value: 'Dentist',
        content: [
            {
                type: 'text',
                placeholder: 'Дата останнього відвідування',
                name: 'dataLastVisit',
                value: '',
                renderContent: props => input(props),
            },
        ],
    },
];
