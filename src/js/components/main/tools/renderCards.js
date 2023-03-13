import {fetchGetCard} from '../../../tools/fetch/fetchGetCard.js';
import {Card} from '../../clases/Card/Card.js';

export const renderCards = async (container) => {
    const {res} = await fetchGetCard()
    for (let i=0; i<3; i++) {
        const card = new Card(res[i])
        container.append(card.render())
    }

}