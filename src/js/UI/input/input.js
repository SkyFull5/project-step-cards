export const input = ({ type, placeholder, name, value, checked }) => {
    const placeholderInput = type !== 'radio' ? `placeholder="${placeholder}"` : '';

    return `<input type="${type}" ${placeholderInput} name="${name}" value="${value || ''}" ${checked || ''}>`;
};
