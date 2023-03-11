import {
  button
} from '.UI/button/button.js';
import {
  input
} from '.UI/input/input.js';

import fetch from '.tools/fetch/fetch.js';
import fetchLogin from '.tools/fetch/fetchLogin.js';

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
    this.emailInput = input("email", "email", "email");
    this.passwordInput = input("password", "password", "password");
    this.submitButton = button("submit", "Логин");
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
    await fetchLogin(formField.email, formField.password);

    this.removeElement();
  }
}

const login = new Login();
login.renderElement().then((element) => {
  document.body.append(element);
});
