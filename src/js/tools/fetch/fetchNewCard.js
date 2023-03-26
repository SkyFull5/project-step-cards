import { request } from './fetch.js';
import { checkingInputsBody } from './checkingInputsBody.js';

export const fetchNewCard = async body => {
    if (!body.doctor) {
        alert('Виникла помилка перезавантажте сторінку');
        return;
    }

    const validation = checkingInputsBody(body);
    if (validation) {
        return await request({
            method: 'POST',
            body: body,
        });
    } else {
        alert('Виникла помилка перезавантажте сторінку');
    }
};
