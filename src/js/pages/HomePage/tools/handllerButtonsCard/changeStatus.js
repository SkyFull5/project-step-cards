import {fetchEditCard} from '../../../../tools/index.js';

export const changeStatus = async (id, allCards, button) => {
    const card = allCards.find( card => card.id === +id);
    card.status = !card.status;

    try {
        const res = await fetchEditCard(id, card);
        button.classList.toggle('complete');

        if (button.classList.contains('complete')) {
            button.textContent = 'Завершено';
        } else {
            button.textContent = 'Не завершено';
        }
    } catch (e) {
        console.error(e)
    }

}
