export const button = ({ type, id, title, disabled, style }) => {
    return `<button class='button ${style}' type='${type}' id='${id}' ${disabled || ''}><p class='medium'>${title}</p></button>`;
};
