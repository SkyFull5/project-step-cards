import {Modal} from '../../clases/index.js';

export const editCard = (id) => {
    const modal = new Modal( {
        title: 'test',
    });
    modal.setModal('editing-visit', 'edit')
    modal.open()
}
