import { fetchEditCard, fetchGetCard, fetchNewCard } from '../../../../tools/index.js';
import { Card, FormVisit, Modal } from '../../../../components/index.js';
import { renderCards } from '../handllerButtonsCard/renderCards.js';

export const actionVisit = async ({ idForm = '', id = '' }) => {
    const modal = new Modal();

    const { res: allCard } = await fetchGetCard();

    const params = allCard.find(item => item.id === +id);

    const formVisit = new FormVisit({ idForm, modal, params });

    modal.setModal(idForm, formVisit.renderElement(modal));

    modal.open();

    formVisit.form.addEventListener('submit', async () => {
        const cardContainer = document.querySelector('.cards-list');
        const paginationContainer = document.querySelector('.pagination-wrapper');

        if (idForm === 'create-visit') {
            await fetchNewCard(formVisit.formField);
            const { res: allCard } = await fetchGetCard();

            await renderCards({ cardContainer, allCard, paginationContainer });
        } else {
            await fetchEditCard(id, formVisit.formField);
            const { res: allCard } = await fetchGetCard();

            await renderCards({ cardContainer, allCard, paginationContainer });
        }
    });
};
