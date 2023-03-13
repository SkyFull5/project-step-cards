import { Header, Main } from '../../components/index.js';
import { createVisit } from './tools/createVisit/createVisit.js';
import { renderCards } from './tools/renderCards.js';
import { handler } from './tools/handler.js';
import { fetchGetCard } from '../../tools/fetch/fetchGetCard.js';

const root = document.querySelector('#root');
export const HomePage = async () => {
    root.innerHTML = Header();
    root.innerHTML += Main();

    let cardContainer = document.querySelector('.cards-list-wrapper');

    const { res: allCard } = await fetchGetCard();

    await renderCards(cardContainer, allCard);

    const buttonCreateVisit = document.querySelector('#create-visit-button');

    buttonCreateVisit.addEventListener('click', async () => {
        await createVisit('create-visit', allCard);
    });

    cardContainer.addEventListener('click', e => {
        handler(e, allCard);
    });
};
