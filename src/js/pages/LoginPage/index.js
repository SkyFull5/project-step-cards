import { LoginForm } from '../../components/clases/Login/LoginForm.js';

const root = document.querySelector('#root');

export const LoginPage = async () => {
  const login = new LoginForm();
  root.appendChild(await login.renderElement());
};