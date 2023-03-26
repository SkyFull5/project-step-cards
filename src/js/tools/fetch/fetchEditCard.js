import { request } from './fetch.js';
import { objectBody } from './objectBody.js';
import { checkingInputsBody } from './checkingInputsBody.js';

export const fetchEditCard = async (id, body) => {
    if (!body.doctor) {
        alert('Виникла помилка перезавантажте сторінку');
        return;
    }

    if (!id) {
        alert('Виникла помилка перезавантажте сторінку');
        return;
    }

    const validation = checkingInputsBody(body);

    if (validation) {
        return await request({
            url: `/${id}`,
            method: 'PUT',
            body: body,
        });
    } else {
        alert('Виникла помилка перезавантажте сторінку');
    }
};
