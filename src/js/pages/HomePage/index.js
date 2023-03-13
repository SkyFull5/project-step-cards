import { Header, Main } from '../../components/index.js';
import { createVisit } from '../../tools/createVisit/createVisit.js';
import { fetchGetCard } from '../../tools/fetch/fetchGetCard.js';
import { Card } from '../../components/clases/Card/Card.js';

const root = document.querySelector('#root');
export const HomePage = async () => {
    root.innerHTML = Header();
    root.innerHTML += Main();

    const getCard = await fetchGetCard();
    const cardContainer = document.querySelector('.cards-list-wrapper');

    const checkDefaultText = cardContainer.children.namedItem('def-text');
    if (!!checkDefaultText) {
        checkDefaultText.remove();
    }

    getCard.res.forEach(item => {
        const card = new Card(item);
        cardContainer.append(card.render());
    });

    const buttonCreateVisit = document.querySelector('#create-visit-button');

    buttonCreateVisit.addEventListener('click', () => {
        createVisit('create-visit');
    });
};
