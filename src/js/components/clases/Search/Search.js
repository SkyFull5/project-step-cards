import { renderElementSearch } from './tools/renderElementSearch.js';

export class Search {
    searchContainer = document.createElement('div');

    constructor(cards) {
        this.title = '';
        this.urgency = '';
        this.status = '';
        this.cards = '';
        this.defaultCards = cards;
    }

    renderElement(callback) {
        const renderInput = renderElementSearch();

        this.searchContainer.classList.add('search-wrapper');
        this.searchContainer.append(renderInput);
        this.actionSearch(callback);
        return this.searchContainer;
    }

    actionSearch(callback) {
        this.searchContainer.addEventListener('change', e => {
            const targetName = e.target.name;
            const targetValue = e.target.value;

            if (targetName === 'urgency') {
                this.urgency = targetValue;
                if (!targetValue) {
                    this.urgency = '';
                }
            }
            if (e.target.name === 'status') {
                this.status = targetValue;

                if (!targetValue) {
                    this.status = '';
                }
            }

            this.cards = this.defaultCards.filter(item => {
                if (!!this.urgency && !!this.status) {
                    return String(item.status) === this.status && item.urgency === this.urgency;
                } else if (!!this.urgency) {
                    return item.urgency === this.urgency;
                } else if (!!this.status) {
                    return String(item.status) === this.status;
                } else {
                    return item;
                }
            });

            if (!this.status && !this.urgency) {
                callback(this.defaultCards);
                console.log('status');
            } else {
                callback(this.cards);
                console.log('cards');
            }
        });

        this.searchContainer.addEventListener('input', e => {
            const targetValue = e.target.value;

            this.cards = this.defaultCards.filter(({ secondName, urgency, status }) => {
                const checkSecondName = secondName.toLowerCase().indexOf(targetValue.toLowerCase()) >= 0;

                if (!!this.status && !!this.urgency) {
                    return checkSecondName && urgency === this.urgency && String(status) === this.status;
                } else if (!!this.status) {
                    return checkSecondName && String(status) === this.status;
                } else if (!!this.urgency) {
                    return checkSecondName && urgency === this.urgency;
                } else {
                    return checkSecondName;
                }
            });

            callback(this.cards);
        });
    }
}
