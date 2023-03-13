export const createOption = (option) => {
    return `
        <div class="card-option ${option.option}" data-action="${option.option}"">${option.img}</div>
    `
}