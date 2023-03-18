export const paginationRenderButton = (quantity, container) => {
    const quantityArr = [];

    for (let i = 0; i <= quantity - 1; ++i) {
        quantityArr.push(i + 1);
    }

    quantityArr.forEach(item => (container.innerHTML += `<div class="pagination-button">${item}</div>`));
};
