import {doctors, showInfo, options} from './tools/index.js';

export class Card {
    CARD_TITLE = 'Картка пацієнта';
    card = document.createElement('div')

    constructor(patient) {
        this.id = patient.id;
        this.firstName = patient.firstName;
        this.secondName = patient.secondName;
        this.fatherName = patient.fatherName;
        this.doctor = patient.doctor;
    }
    render() {
        const name = `${this.secondName} ${this.firstName[0]}.${this.fatherName[0]}`
        this.card.classList.add('card');
        this.card.setAttribute('data-card-id', this.id);
        this.card.innerHTML = `
            <h4 class="card-title">${this.CARD_TITLE}</h4>
            <div class="card-body">
                <p><span>П.І.Б</span> ${name}</p>
                
                <p><span>Лікар</span> ${doctors[this.doctor]}</p>
            </div>
            <div class="card-options">
            </div>
            <div class="card-footer">
            </div>
        `
        this.card.querySelector('.card-footer').insertAdjacentElement('afterbegin', this.createButton())
        const check = this.createOptions();
        check.forEach(elem => this.card.querySelector('.card-options').insertAdjacentElement('afterbegin', elem))

        return this.card;
    }

    createOptions () {
        return options.map( option => {
            const optionElem = document.createElement('div');
            optionElem.classList.add(option.option);
            optionElem.setAttribute('data-id', this.id);
            optionElem.textContent = option.option
            optionElem.addEventListener('click', option.handler)
            return optionElem
        })
    }
    createButton() {
        const button = document.createElement('button');
        button.setAttribute('data-action', 'show-info');
        button.setAttribute('data-id', this.id)
        button.textContent = 'Показати більше'
        button.addEventListener('click', showInfo)
        return button;
    }
}