export const createStatusButton = status => {
    return `
    <button class="status-button ${status ? 'complete' : ''}" data-action="change-status">${status ? 'Завершено' : 'Не завершено'}</button>
    `
};

