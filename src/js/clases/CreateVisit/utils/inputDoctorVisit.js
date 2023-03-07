import { input } from '../../../UI/index.js';
import { checkbox } from '../../../components/index.js';

export const inputDoctorVisit = [
    {
        value: 'Cardiologist',
        content: [
            {
                type: 'text',
                name: 'age',
                placeholder: 'Вік',
                renderContent: props => input(props),
            },
            {
                type: 'text',
                name: 'bodyMassIndex',
                placeholder: 'Індекс маси тіла',
                renderContent: props => input(props),
            },
            {
                type: 'text',
                name: 'chooseDoctor',
                placeholder: 'Оберіть педіатра',
                renderContent: props => input(props),
            },
            {
                type: 'text',
                name: 'normalPressure',
                placeholder: 'Звичайний тиск',
                renderContent: props => input(props),
            },
            {
                type: 'radio',
                title: 'Серцево-судинні захворювання',
                name: 'CardiovascularDiseases',
                content: [
                    {
                        value: 'Так',
                    },
                    {
                        value: 'Ні',
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
                placeholder: 'Вік',
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
                renderContent: props => input(props),
            },
        ],
    },
];
