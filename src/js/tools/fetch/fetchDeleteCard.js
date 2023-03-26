import { request } from './fetch.js';

export const fetchDeleteCard = async id => {
    if (!id) {
        alert('Виникла помилка перезавантажте сторінку');
        return;
    }
    return await request({
        url: `/${id}`,
        method: 'DELETE',
    });
};
