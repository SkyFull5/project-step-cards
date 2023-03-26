import { InfoVisit, Modal } from '../../../../components/index.js';
import { fetchGetCard } from '../../../../tools/index.js';

export const showInfo = async (id, allCards) => {
    const { res: allCard } = await fetchGetCard();

    const card = allCard.find(card => card.id === +id);
    const modal = new Modal({ width: '80%' });
    const infoVisit = new InfoVisit(card);
    modal.setModal('show-info', infoVisit.render());
    modal.open();
};
