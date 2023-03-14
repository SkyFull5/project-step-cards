import { fetchGetCard } from '../../../../tools/fetch/fetchGetCard.js';
import { Card } from '../../../../components/clases/Card/Card.js';

export const renderCards = async (container, allCard) => {
    const defaultTextCard = `<p class="big" id='def-text'>У вас ще не створено жодного візиту</p>`;
    allCard.sort((a, b) => b.creationTime - a.creationTime);

    if (!!allCard[0]) {
        return allCard.map(item => {
            const card = new Card(item);
            container.append(card.render());
            return card;
        });
    } else {
        container.insertAdjacentHTML('beforeend', defaultTextCard);
    }
};
