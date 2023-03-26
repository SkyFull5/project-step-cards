import { filterCards, renderElementSearch, useCallback } from './tools/index.js';
import { fetchGetCard } from '../../../tools/index.js';

export class Search {
    searchContainer = document.createElement('div');

    constructor({ cards, cardContainer, paginationContainer, paginationPage = 1, callback }) {
        this.title = '';
        this.urgency = '';
        this.status = '';
        this.cards = '';
        this.defaultCards = cards;
        this.cardContainer = cardContainer;
        this.paginationContainer = paginationContainer;
        this.paginationPage = paginationPage;
        this.callback = callback;
        this.observePaginationContainer();
    }

    renderElement() {
        const renderInput = renderElementSearch();

        this.searchContainer.classList.add('search-wrapper');
        this.searchContainer.append(renderInput);
        this.actionSearchSelectOrTitle();
        this.actionSearchTitle();

        return this.searchContainer;
    }

    actionSearchSelectOrTitle() {
        this.searchContainer.addEventListener('change', e => {
            const targetName = e.target.name;
            const targetValue = e.target.value;

            if (targetName === 'urgency') {
                this.urgency = targetValue;
                if (!targetValue) {
                    this.urgency = '';
                }
            }
            if (targetName === 'status') {
                this.status = targetValue;

                if (!targetValue) {
                    this.status = '';
                }
            }

            if (targetName === 'urgency' || targetName === 'status') {
                this.paginationPage = 1;

                this.actionFilterCard();
                this.actionSearchRender();
            }
        });
    }
    actionSearchTitle() {
        this.searchContainer.addEventListener('input', e => {
            if (e.target.name === 'title') {
                this.title = e.target.value;

                this.paginationPage = 1;

                this.actionFilterCard();
                this.actionSearchRender();
            }
        });
    }

    actionFilterCard() {
        this.cards = filterCards(this.defaultCards, this.urgency, this.status, this.title);
    }
    actionSearchRender() {
        useCallback({
            callback: this.callback,
            defaultCards: this.defaultCards,
            cards: this.cards,
            paginationContainer: this.paginationContainer,
            cardContainer: this.cardContainer,
            activeButton: this.paginationPage,
            status: this.status,
            urgency: this.urgency,
            title: this.title,
        });
    }

    observePaginationContainer() {
        this.paginationContainer.addEventListener('click', async e => {
            if (!e.target.classList.contains('pagination-wrapper')) {
                this.paginationPage = Number(e.target.textContent);
                const { res: allCard } = await fetchGetCard();
                this.defaultCards = allCard;
                this.actionSearchRender();
            }
        });
    }
}
