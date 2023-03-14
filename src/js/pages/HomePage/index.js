import { Header, Main } from '../../components/index.js';
import { fetchGetCard } from '../../tools/fetch/fetchGetCard.js';
import { actionVisit, handlerButtonsCard } from './tools/index.js';
import { renderCards } from './tools/handllerButtonsCard/renderCards.js';

const root = document.querySelector('#root');
export const HomePage = async () => {
    root.innerHTML = Header();
    root.innerHTML += Main();

    const { res: allCard } = await fetchGetCard();

    const cardContainer = document.querySelector('.cards-container');
    const createVisit = document.querySelector('#create-visit-button');

    createVisit.addEventListener('click', () => {
        actionVisit({ idForm: 'create-visit', allCard });
    });

    await renderCards(cardContainer, allCard);


    cardContainer.addEventListener('click', e => {
        handlerButtonsCard(e, allCard);
    });
};
