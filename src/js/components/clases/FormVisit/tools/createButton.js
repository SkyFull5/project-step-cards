import { buttonFormVisit } from '../utils/index.js';

export const createButton = idForm => {
    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('wrapper-button');

    const button = buttonFormVisit
        .map(item => {
            if (item.form === idForm) {
                return item.buttons.map(button => button.renderContent(button));
            }
        })
        .find(item => !!item)
        .join('');

    buttonWrapper.insertAdjacentHTML('afterbegin', button);

    return buttonWrapper;
};
