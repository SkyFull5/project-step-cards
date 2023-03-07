import { input } from '../../UI/index.js';

export const checkbox = props => {
    const { title, content } = props;
    const inputs = content.map(item => `<label>${item.value}${input(props)}</label>`).join('');

    return `<label>${title}${inputs}</label>`;
};
