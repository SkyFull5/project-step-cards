import { InfoVisit, Modal } from '../../../../components/index.js';

export const showInfo = (id, allCards) => {
    const card = allCards.find(card => card.id === +id);
    const modal = new Modal({ width: '80%' });
    const infoVisit = new InfoVisit(card);
    modal.setModal('show-info', infoVisit.render());
    modal.open();
};
