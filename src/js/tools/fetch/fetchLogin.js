import { request } from './fetch.js';

export const fetchLogin = async (email, password) => {
    const login = await request({
        url: '/login',
        method: 'POST',
        body: { email: `${email}`, password: `${password}` },
    });

    if (login.status === 200) {
        window.localStorage.setItem('token', login.res);
    }
    return login;
    // TODO если не тогда модалка еррора
};
