import { InfoVisit, Modal } from '../../../../components/clases/index.js';

export const showInfo = (id, allCards) => {
    const card = allCards.find(card => card.id === +id);
    const modal = new Modal({ width: '80%' });
    const infoVisit = new InfoVisit(card);
    modal.setModal('show-info', infoVisit.render());
    modal.open();
};

// TODO написать класс который примет на вход объект с информацией о визите и отрисует содержимое модалки.

// Важно помнить, что у разных врачей есть разные поля для отрисовки. Т.е. сердечно сосидистые заболевания
// нужно отрисовывать только для Кардиолога
