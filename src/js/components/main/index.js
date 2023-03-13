export const Main = () => {
    const defaultTextCard = `<p class="big" id='def-text'>У вас ще не створено жодного візиту</p>`;

    return `<main class='main'>
                <div class='search'>
                </div>
                <div class='cards-list-wrapper'>
                ${defaultTextCard}
                </div>
            </main>`;
};
