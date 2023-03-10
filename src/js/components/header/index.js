import { button, logo } from '../../UI/index.js';

export const Header = () => {
    return `<header class='header'>
    <div class='wrapper-logo'>
        ${logo()}
    </div>
    <div class="wrapper-button">
        ${button({ type: 'submit', id: 'create-visit', style: 'submit', title: 'Створити візит' })}
    </div>
</header>`;
};
