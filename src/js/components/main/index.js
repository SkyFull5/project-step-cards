import {handler} from './tools/handler.js';
import {renderCards} from './tools/renderCards.js';

export const Main = () => {
    const main = document.createElement('main');
    main.classList.add('main')
    main.addEventListener('click', handler)
    renderCards(main);

    return main;
};
