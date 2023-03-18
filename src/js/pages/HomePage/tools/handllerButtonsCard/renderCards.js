import { paginationRenderButton } from '../paginationRenderButton/paginationRenderButton.js';
import { loaderRender } from '../../../../UI/index.js';
import { Card } from '../../../../components/index.js';

export const renderCards = async ({ cardContainer, allCard, paginationContainer, activeButton = 1 }) => {
    const defaultTextCard = `<p class="big" id='def-text'>У вас ще не створено жодного візиту</p>`;
    allCard?.sort((a, b) => b.creationTime - a.creationTime);
    cardContainer.innerHTML = loaderRender(200);

    paginationContainer.innerHTML = '';
    const perPage = 7;
    const paginationButton = Math.ceil(allCard.length / perPage);
    paginationRenderButton(paginationButton, paginationContainer);

    document?.querySelectorAll('.pagination-button')[activeButton - 1]?.classList.add('active');

    const lastIndex = Number(activeButton) * perPage;
    const firstIndex = lastIndex - perPage;
    const currentContent = allCard.slice(firstIndex, lastIndex);

    return setTimeout(() => {
        cardContainer.innerHTML = '';
        if (!!allCard[0]) {
            return currentContent.map(item => {
                const card = new Card(item);
                cardContainer.append(card.render());
                return card;
            });
        } else {
            cardContainer.insertAdjacentHTML('beforeend', defaultTextCard);
        }
    }, 1000);
};
