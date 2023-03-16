import { Header, Main } from '../../components/index.js';
import { fetchGetCard } from '../../tools/fetch/fetchGetCard.js';
import { actionVisit, handlerButtonsCard } from './tools/index.js';
import { renderCards } from './tools/handllerButtonsCard/renderCards.js';
import { Search } from '../../components/clases/index.js';
import { loaderRender } from '../../UI/index.js';

const root = document.querySelector('#root');
export const HomePage = async () => {
    root.innerHTML = Header();
    root.innerHTML += Main();

    const { res: allCard } = await fetchGetCard();

    const cardContainer = document.querySelector('.cards-list');
    const paginationContainer = document.querySelector('.pagination-wrapper');
    const createVisit = document.querySelector('#create-visit-button');

    createVisit.addEventListener('click', () => {
        actionVisit({ idForm: 'create-visit', allCard });
    });

    await renderCards(cardContainer, allCard, paginationContainer);

    const searchFilter = cards => {
        renderCards(cardContainer, cards, paginationContainer);
    };

    // const func = e => {
    //     console.log('hello');
    //     if (e.target.className !== 'pagination-wrapper') {
    //         cardContainer.innerHTML = loaderRender(200);
    //         paginationContainer.innerHTML = '';
    //
    //         const lastIndex = Number(e.target.textContent) * 7;
    //         const firstIndex = lastIndex - 7;
    //         const currentContent = allCard.slice(firstIndex, lastIndex);
    //         setTimeout(() => {
    //             cardContainer.innerHTML = '';
    //             // paginationContainer.removeEventListener('click', func);
    //             renderCards(cardContainer, allCard, paginationContainer, currentContent, Number(e.target.textContent));
    //         }, 500);
    //     }
    // };
    //
    // paginationContainer.addEventListener('click', func);

    cardContainer.addEventListener('click', e => {
        handlerButtonsCard(e, allCard);
    });

    const main = document.querySelector('.main');
    const search = new Search(allCard);
    main.insertAdjacentElement('afterbegin', search.renderElement(searchFilter));
};
