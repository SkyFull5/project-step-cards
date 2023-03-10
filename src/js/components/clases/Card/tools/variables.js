import {editCard} from './editCard.js';
import {deleteCard} from './deleteCard.js';

export const doctors = {
    'Therapist': 'Терапевт',
    'Cardiologist': 'Кардиолог',
    'Dentist': 'Стоматолог'
}

export const options = [
    {
        option: 'edit-visiting',
        handler: editCard
        ,
    },
    {
        option: 'delete-card',
        handler: deleteCard,
    }
];