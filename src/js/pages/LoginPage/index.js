export const root = document.querySelector('#root');

const renderLoginPage = async () => {
  const login = new Login();
  root.appendChild(await login.renderElement());
}

renderLoginPage();