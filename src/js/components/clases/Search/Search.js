import { renderElementSearch } from './tools/renderElementSearch.js';

export class Search {
    searchContainer = document.createElement('div');

    constructor(title, urgency, status) {
        this.title = title;
        this.urgency = urgency;
        this.status = status;
    }

    renderElement() {
        const renderInput = renderElementSearch();

        this.searchContainer.classList.add('search-wrapper');
        this.searchContainer.append(renderInput);

        return this.searchContainer;
    }
}
