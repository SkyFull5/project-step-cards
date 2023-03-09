export const button = ({ type, id, title, disabled }) => {
    return `<button type='${type}' id='${id}' ${disabled || ''}>${title}</button>`;
};
