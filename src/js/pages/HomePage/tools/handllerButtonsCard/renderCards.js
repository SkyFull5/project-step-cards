import { fetchGetCard } from '../../../../tools/fetch/fetchGetCard.js';
import { Card } from '../../../../components/clases/Card/Card.js';
import { pagination } from '../pagination/pagination.js';
import { loaderRender, logo } from '../../../../UI/index.js';

let flag = true;
export const renderCards = async (container, allCard, paginationContainer, paginationContent = '', activeButton = 1) => {
    const defaultTextCard = `<p class="big" id='def-text'>У вас ще не створено жодного візиту</p>`;
    allCard?.sort((a, b) => b.creationTime - a.creationTime);
    container.innerHTML = '';

    paginationContainer.innerHTML = '';
    const perPage = 7;
    const paginationButton = Math.ceil(allCard.length / perPage);
    pagination(paginationButton, paginationContainer);

    document?.querySelectorAll('.pagination-button')[activeButton - 1]?.classList.add('active');

    const actionPagination = e => {
        if (e.target.className !== 'pagination-wrapper') {
            container.innerHTML = loaderRender(200);

            const lastIndex = Number(e.target.textContent) * perPage;
            const firstIndex = lastIndex - perPage;
            const currentContent = allCard.slice(firstIndex, lastIndex);
            setTimeout(() => {
                container.innerHTML = '';
                renderCards(container, allCard, paginationContainer, currentContent, Number(e.target.textContent));
            }, 500);
        }
    };

    if (!!paginationContent) {
        return paginationContent.map(item => {
            const card = new Card(item);
            container.append(card.render());
            return card;
        });
    } else {
        if (!!flag) {
            paginationContainer.addEventListener('click', actionPagination);
        }
        flag = false;

        const content = allCard.slice(0, perPage);
        if (!!allCard[0]) {
            return content.map(item => {
                const card = new Card(item);
                container.append(card.render());
                return card;
            });
        } else {
            container.insertAdjacentHTML('beforeend', defaultTextCard);
        }
    }
};
