import { input } from '../index.js';

export const checkbox = props => {
    const { title, contentRadio } = props;

    const inputs = contentRadio.map(item => `<label>${item.variant}${input(item)}</label>`).join('');

    return `<div>${title}${inputs}</div>`;
};
