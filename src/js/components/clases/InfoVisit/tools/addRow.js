export const addRow = (label, value, container) => {
    const div = `
        <div class="info-row">
          <p class="info-label big">${label}</p>
          <p class="info-value big">${value || 'Невідомо'}</p>
        </div>`;

    container.insertAdjacentHTML('beforeend', div);
};
