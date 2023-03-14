import {doctors} from '../utils/doctorsInfo.js';
import {button} from '../../../../UI/index.js';
import {createOption} from './createOption.js';
import {options} from '../utils/options.js';
import {urgencies} from '../utils/urgencyInfo.js';
import {createStatusButton} from './createStatusButton.js';

export const createCardForm = (name, doctor, id, complete, urgency) => {

    return `
            <p>${name}</p>
            <p>${doctors[doctor]}</p>
            <p>${createStatusButton(complete)}</p>
            <p>${urgencies[urgency]}</p>
            <div class="card-actions">
             ${button({
        type: 'button',
        id: id,
        title: 'Показати більше',
        style: 'submit show-more'
    })}
             ${options.map( option => createOption(option)).join('')}
            </div>
    `
}