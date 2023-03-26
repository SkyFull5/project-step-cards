import { deleteCard } from './deleteCard.js';
import { showInfo } from './showInfo.js';
import { actionVisit } from '../actionVisit/actionVisit.js';
import { changeStatus } from './changeStatus.js';

export const handlerButtonsCard = async (e, allCard) => {
    const id = e.target?.closest('.card')?.dataset?.cardId;

    if (e.target.closest('.show-more')) {
        await showInfo(id, allCard);
    }

    if (e.target.closest('.editing-visiting')) {
        await actionVisit({ id, allCard, idForm: 'editing-visit' });
    }

    if (e.target.closest('.delete-card')) {
        await deleteCard(id);
    }

    if (e.target.closest('.status-button')) {
        await changeStatus(id);
    }
};
