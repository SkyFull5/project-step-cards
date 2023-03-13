import { FormVisit, Modal } from '../../components/index.js';
import { fetchNewCard } from '../fetch/fetchNewCard.js';
import { Card } from '../../components/clases/Card/Card.js';

export const createVisit = id => {
    const modal = new Modal();
    const createVisit = new FormVisit({ id: id });
    modal.setModal(id, createVisit.renderElement());
    createVisit.observerForm();

    modal.open();

    const form = document.querySelector(`#${id}`);

    form.addEventListener('change', e => {
        if (e.target.id === 'choose-doctor') {
            createVisit.renderInputDoctor(e.target.value);
        }
    });

    form.addEventListener('submit', async e => {
        if (e.target.id === 'button-close') {
            modal.close();
        } else {
            e.preventDefault();
            const formField = {};
            [...e.target.elements].forEach(item => {
                if (!!item.name) {
                    formField[item.name] = item.value;
                }
            });

            const cardContainer = document.querySelector('.cards-list-wrapper');

            const newCard = await fetchNewCard(formField);
            if (!!newCard) {
                const card = new Card(newCard.res);

                const checkDefaultText = cardContainer.children.namedItem('def-text');
                if (!!checkDefaultText) {
                    checkDefaultText.remove();
                }
                cardContainer.append(card.render());

                modal.close();
            }
        }
    });
};
