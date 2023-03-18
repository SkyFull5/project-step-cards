import { fetchEditCard, fetchNewCard } from '../../../../tools/index.js';
import { Card, FormVisit, Modal } from '../../../../components/index.js';

export const actionVisit = async ({ idForm = '', id = '', allCard = '' }) => {
    const modal = new Modal();

    const params = allCard.find(item => item.id === +id);

    const formVisit = new FormVisit({ idForm, modal, params });

    modal.setModal(idForm, formVisit.renderElement(modal));

    modal.open();

    formVisit.form.addEventListener('submit', async () => {
        const cardContainer = document.querySelector('.cards-list');

        if (idForm === 'create-visit') {
            const res = await fetchNewCard(formVisit.formField);

            const newCard = new Card(res.res);

            const cards = document.querySelectorAll('.card');
            !!cards[7] && cards[7].remove();

            cardContainer.prepend(newCard.render());
            allCard.push(res.res);
        } else {
            const res = await fetchEditCard(id, formVisit.formField);
            const editCard = new Card(res.res);
            document.querySelector(`[data-card-id="${+id}"]`).remove();
            allCard.unshift(res.res);
            cardContainer.prepend(editCard.render());
        }
    });
};
