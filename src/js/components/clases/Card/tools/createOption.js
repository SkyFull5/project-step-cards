export const createOption = option => {
    return `
        <button class="card-option ${option.option}" data-action="${option.option}"">${option.img}</button>
    `;
};
