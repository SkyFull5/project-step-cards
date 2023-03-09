import { input } from '../index.js';

export const checkbox = props => {
    const { title, contentRadio } = props;

    const inputs = contentRadio.map(item => `<label class='radio-variant'><p>${item.variant}</p>${input(item)}</label>`).join('');

    return `<div class='wrapper-radio'><p>${title}</p>${inputs}</div>`;
};
