export const input = ({ type, placeholder, name, value }) => `
<input type="${type}" placeholder="${placeholder}" name="${name}" value="${!!value ? value : ''}">`;
