import { fetchEditCard, fetchGetCard } from '../../../../tools/index.js';
import { renderCards } from './renderCards.js';

export const changeStatus = async id => {
    const cardContainer = document.querySelector('.cards-list');
    const paginationContainer = document.querySelector('.pagination-wrapper');
    const { res: allCard } = await fetchGetCard();

    const card = allCard.find(card => card.id === +id);
    card.status = !card.status;

    try {
        await fetchEditCard(id, card);

        await renderCards({ cardContainer, allCard, paginationContainer });
    } catch (e) {
        console.error(e);
    }
};
