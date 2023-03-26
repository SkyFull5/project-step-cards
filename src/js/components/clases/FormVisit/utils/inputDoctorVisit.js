import { checkbox, input } from '../../../../UI/index.js';

export const inputDoctorVisit = [
    {
        value: 'Cardiologist',
        content: [
            {
                type: 'number',
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
                type: 'number',
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
                contentRadio: [
                    {
                        type: 'radio',
                        value: 'true',
                        variant: 'Так',
                        name: 'CardiovascularDiseases',
                        checked: '',
                    },
                    {
                        type: 'radio',
                        value: 'false',
                        variant: 'Ні',
                        name: 'CardiovascularDiseases',
                        checked: 'checked',
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
                type: 'number',
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
