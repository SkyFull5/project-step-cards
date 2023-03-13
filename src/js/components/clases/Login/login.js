import {
  button,
  input
} from '../../../UI/index.js';
import {
  fetchLogin
} from '../../../tools/index.js';

export class Login {
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
      type: "email",
      placeholder: "email",
      name: "email"
    });
    this.passwordInput = input({
      type: "password",
      placeholder: "password",
      name: "password"
    });
    this.submitButton = button({
      type: "submit",
      title: "Логин"
    });
    this.form = document.createElement("form");
    this.form.id = "form-login";
    this.form.innerHTML = `${this.emailInput}${this.passwordInput}${this.submitButton}`;

    this.form.addEventListener("submit", this.handleSubmit);

    this.element = document.createElement("div");
    this.element.className = "login-form";
    this.element.append(this.form);

    return this.element;
  }

  removeElement() {
    this.form.removeEventListener("submit", this.handleSubmit);
    this.element.remove();
  }

  async handleSubmit(event) {
    event.preventDefault();
    const formField = {};
    [...event.target.elements].forEach((item) => (formField[item.name] = item.value));
    const login = await fetchLogin(formField.email, formField.password);
    if (login.status === 200) {
      mainPage();
    }
    this.removeElement();
  }
}

