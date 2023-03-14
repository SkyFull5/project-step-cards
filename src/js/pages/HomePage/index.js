import { Header, Main } from '../../components/index.js';
import { fetchGetCard } from '../../tools/fetch/fetchGetCard.js';
import { actionVisit, handlerButtonsCard } from './tools/index.js';
import { renderCards } from './tools/handllerButtonsCard/renderCards.js';
import { Search } from '../../components/clases/index.js';

const root = document.querySelector('#root');
export const HomePage = async () => {
    root.innerHTML = Header();
    root.innerHTML += Main();

    const main = document.querySelector('.main');
    const search = new Search();
    main.insertAdjacentElement('afterbegin', search.renderElement());

    const { res: allCard } = await fetchGetCard();

    const cardContainer = document.querySelector('.cards-list-wrapper');
    const createVisit = document.querySelector('#create-visit-button');

    createVisit.addEventListener('click', () => {
        actionVisit({ idForm: 'create-visit', allCard });
    });

    await renderCards(cardContainer, allCard);

    cardContainer.addEventListener('click', e => {
        handlerButtonsCard(e, allCard);
    });
};
