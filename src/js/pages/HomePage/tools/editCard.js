import { FormVisit, Modal } from '../../../components/clases/index.js';
import { logo } from '../../../UI/index.js';
import { fetchGetCard } from '../../../tools/fetch/fetchGetCard.js';
import { fetchEditCard, fetchNewCard } from '../../../tools/index.js';
import { Card } from '../../../components/clases/Card/Card.js';

export const editCard = async (id, allCard) => {
    const modal = new Modal({
        title: 'test',
    });

    const card = allCard.find(item => item.id === +id);

    const editForm = new FormVisit({ doctor: card.doctor, params: card, id: 'editing-visit' });

    modal.setModal('editing-visit', editForm.renderElement());

    editForm.observerForm();

    modal.open();

    const form = document.querySelector(`#editing-visit`);

    form.addEventListener('reset', () => modal.close());

    form.addEventListener('submit', async event => {
        event.preventDefault();
        const formField = {};
        [...event.target.elements].forEach(item => {
            if (!!item.name) {
                formField[item.name] = item.value;
            }
        });

        const editCard = await fetchEditCard(id, formField);

        document.querySelector(`[data-card-id="${id}"]`).remove();

        const newCard = new Card(editCard.res);

        const cardContainer = document.querySelector('.cards-list-wrapper');
        cardContainer.prepend(newCard.render());

        modal.close();
    });
};
