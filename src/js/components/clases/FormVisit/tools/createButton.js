import { buttonFormVisit } from '../utils/index.js';

export const createButton = idForm => {
    const button = buttonFormVisit
        .map(item => {
            if (item.form === idForm) {
                return item.buttons.map(button => button.renderContent(button));
            }
        })
        .find(item => !!item)
        .join('');

    return `<div class='wrapper-button'>${button}</div>`;
};
