import { fetchGetCard } from '../../../tools/fetch/fetchGetCard.js';
import { Card } from '../../../components/clases/Card/Card.js';

export const renderCards = async (container, res) => {
    const defaultTextCard = `<p class="big" id='def-text'>У вас ще не створено жодного візиту</p>`;

    if (!!res[0]) {
        return res.map(item => {
            const card = new Card(item);
            container.append(card.render());
            return card;
        });
    } else {
        container.insertAdjacentHTML('beforeend', defaultTextCard);
    }
};
