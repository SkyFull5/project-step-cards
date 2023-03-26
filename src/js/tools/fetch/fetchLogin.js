import { request } from './fetch.js';

export const fetchLogin = async (email, password) => {
    if (!email || !password) {
        alert('Виникла помилка перезавантажте сторінку');
        return;
    }

    const login = await request({
        url: '/login',
        method: 'POST',
        body: { email: `${email}`, password: `${password}` },
    });

    if (login.status === 200) {
        window.localStorage.setItem('token', login.res);
    }
    return login;
};
