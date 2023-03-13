import { button, input } from '../../../UI/index.js';
import { fetchLogin } from '../../../tools/index.js';
import { mainPage } from '../../../pages/index.js';

export class LoginForm {
    constructor() {
        this.element = null;
        this.form = null;
        this.emailInput = null;
        this.passwordInput = null;
        this.submitButton = null;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async renderElement() {
        this.emailInput = input({
            type: 'email',
            placeholder: 'Ваш Email',
            name: 'email',
        });
        this.passwordInput = input({
            type: 'password',
            placeholder: 'Пароль',
            name: 'password',
        });
        this.submitButton = button({
            type: 'submit',
            title: 'Логин',
            style: 'submit',
        });
        this.form = document.createElement('form');
        this.form.id = 'login-form';
        this.form.innerHTML = '<h4>Логін</h4>';
        this.form.innerHTML += `${this.emailInput}${this.passwordInput}${this.submitButton}`;

        this.form.addEventListener('submit', this.handleSubmit);
        this.element = document.createElement('div');
        this.element.className = 'wrapper-login-form';
        this.element.append(this.form);

        return this.element;
    }

    removeElement() {
        this.form.removeEventListener('submit', this.handleSubmit);
        this.element.remove();
    }

    async handleSubmit(event) {
        event.preventDefault();
        const formField = {};
        [...event.target.elements].forEach(item => (formField[item.name] = item.value));
        const login = await fetchLogin(formField.email, formField.password);
        if (login.status === 200) {
            await mainPage();
        }
        this.removeElement();
    }
}
