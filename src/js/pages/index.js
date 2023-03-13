import { HomePage } from './HomePage/index.js';
import { LoginPage } from './LoginPage/index.js';

export const mainPage = async () => {
    const isAuth = window.localStorage.getItem('token');

    if (isAuth) {
        await HomePage();
    } else {
        await LoginPage();
    }
};
