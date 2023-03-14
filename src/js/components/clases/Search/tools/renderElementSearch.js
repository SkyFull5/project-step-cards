import { searchDefault } from '../utils/searchDefault.js';

export const renderElementSearch = () => {
    const div = document.createElement('div');
    div.classList.add('search');
    const get = searchDefault.map(item => item.renderContent(item)).join('');

    div.insertAdjacentHTML('afterbegin', get);

    return div;
};
