import { Modal } from '../../../components/clases/index.js';

export const showInfo = id => {
    const modal = new Modal();
    modal.setModal('show-info', 'edit');
    modal.open();
};
