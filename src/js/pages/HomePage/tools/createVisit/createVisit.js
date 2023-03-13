import { FormVisit, Modal } from '../../../../components/index.js';
import { Card } from '../../../../components/clases/Card/Card.js';
import { fetchNewCard } from '../../../../tools/index.js';

export const createVisit = async (id, allCard) => {
    const modal = new Modal();
    const createVisit = new FormVisit({ id: id });
    modal.setModal(id, createVisit.renderElement());
    createVisit.observerForm();
    console.log(createVisit);

    modal.open();

    const form = document.querySelector(`#${id}`);

    form.addEventListener('reset', () => modal.close());

    form.addEventListener('submit', async event => {
        event.preventDefault();
        const formField = {};
        [...event.target.elements].forEach(item => {
            if (!!item.name) {
                formField[item.name] = item.value;
            }
        });

        const cardContainer = document.querySelector('.cards-list-wrapper');

        const newCard = await fetchNewCard(formField);
        if (!!newCard) {
            const card = new Card(newCard.res);

            allCard.push(newCard.res);
            const checkDefaultText = cardContainer.children.namedItem('def-text');
            if (!!checkDefaultText) {
                checkDefaultText.remove();
            }
            createVisit.removeElement();
            modal.close();
            cardContainer.prepend(card.render());
        }
    });
};
