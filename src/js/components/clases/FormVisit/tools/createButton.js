import { buttonFormVisit } from '../utils/index.js';

export const createButton = idForm =>
    buttonFormVisit
        .map(item => {
            if (item.form === idForm) {
                return item.buttons.map(button => button.renderContent(button));
            }
        })
        .find(item => !!item)
        .join('');
