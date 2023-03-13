import {doctors} from '../utils/doctorsInfo.js';
import {button} from '../../../../UI/index.js';
import {createOption} from './createOption.js';
import {options} from '../utils/options.js';

export const createCardForm = (name, doctor, id) => {
    const CARD_TITLE = 'Картка пацієнта';

    return `
            <h4 class="card-title">${CARD_TITLE}</h4>
            <div class="card-body">
                <p><span>П.І.Б</span> ${name}</p>
                <p><span>Лікар</span> ${doctors[doctor]}</p>
            </div>
            <div class="card-options">
                ${options.map( option => createOption(option)).join('')}
            </div>
            <div class="card-footer">
             ${button({
        type: 'button',
        id: id,
        title: 'Показати більше',
        style: 'submit show-more'
    })}
            </div>
    `
}