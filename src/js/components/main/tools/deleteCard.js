import {fetchDeleteCard} from '../../../tools/index.js';

export const deleteCard = async (id) => {
    try {
        const result = await fetchDeleteCard(id);

        if (result.status !== 200) {
            throw Error('Card was not deleted.')
        }

        const deletedCard = document.querySelector(`[data-card-id="${id}"]`);
        console.log('Card was deleted');

        await deletedCard.remove()
    } catch (e) {
        console.error(e);
    }
}

// TODO fetch