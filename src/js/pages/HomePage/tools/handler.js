import { deleteCard } from './deleteCard.js';
import { editCard } from './editCard.js';
import { showInfo } from './showInfo.js';

export const handler = async (e, allCard) => {
    if (e.target.closest('.show-more')) {
        const id = e.target.closest('.card').dataset.cardId;
        showInfo(id);
    }
    if (e.target.closest('.editing-visiting')) {
        const id = e.target.closest('.card').dataset.cardId;
        await editCard(id, allCard);
    }
    if (e.target.closest('.delete-card')) {
        const id = e.target.closest('.card').dataset.cardId;
        await deleteCard(id);
    }
};
