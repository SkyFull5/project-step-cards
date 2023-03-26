import { fetchDeleteCard, fetchGetCard } from '../../../../tools/index.js';
import { renderCards } from './renderCards.js';

export const deleteCard = async id => {
    const cardContainer = document.querySelector('.cards-list');
    const paginationContainer = document.querySelector('.pagination-wrapper');

    try {
        const result = await fetchDeleteCard(id);

        if (result.status >= 200 && result.status <= 203) {
            const { res: allCard } = await fetchGetCard();
            await renderCards({ cardContainer, allCard, paginationContainer });
        } else {
            throw Error('Card was not deleted.');
        }
    } catch (e) {
        console.error(e);
    }
};
