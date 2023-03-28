import { Header, Main, Search } from '../../components/index.js';
import { actionVisit, handlerButtonsCard, renderCards } from './tools/index.js';
import { fetchGetCard, fetchNewCard } from '../../tools/index.js';

const root = document.querySelector('#root');
export const HomePage = async () => {
    root.innerHTML = Header();
    root.innerHTML += Main();

    const { res: allCard } = await fetchGetCard();
    console.log(allCard);

    const cardContainer = document.querySelector('.cards-list');
    const paginationContainer = document.querySelector('.pagination-wrapper');
    const createVisit = document.querySelector('#create-visit-button');

    createVisit.addEventListener('click', () => {
        actionVisit({ idForm: 'create-visit' });
    });

    await renderCards({ cardContainer, allCard, paginationContainer });

    cardContainer.addEventListener('click', async e => {
        await handlerButtonsCard(e, allCard, cardContainer, paginationContainer);
    });

    const main = document.querySelector('.main');
    const search = new Search({
        cards: allCard,
        cardContainer,
        paginationContainer,
        callback: renderCards,
    });

    main.insertAdjacentElement('afterbegin', search.renderElement());
};
