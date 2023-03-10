import {Modal} from '../../Modal/Modal.js';

export const editCard = (e) => {
    const id = e.target.dataset.id;
    const modal = new Modal( {
        title: 'test',
    });
    modal.setModal('editing-visit', 'edit')
    modal.open()
}
