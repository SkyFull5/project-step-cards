import { LoginForm } from '../../components/index.js';

const root = document.querySelector('#root');

export const LoginPage = async () => {
    const login = new LoginForm();
    root.appendChild(await login.renderElement());
};
