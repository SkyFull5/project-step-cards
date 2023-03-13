import { HomePage } from './HomePage/index.js';
import { LoginPage } from './LoginPage/index.js';

export const mainPage = () => {
    const isAuth = window.localStorage.getItem('token');

    if (isAuth) {
        HomePage();
    } else {
        LoginPage();
    }
};
