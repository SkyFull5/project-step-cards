import {Modal} from '../../Modal/Modal.js';

export const showInfo = (e) => {
    const id = e.target.dataset.id;
    const modal = new Modal();
    modal.setModal('show-info', 'edit')
    modal.open()
}