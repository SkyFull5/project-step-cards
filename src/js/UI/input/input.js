export const input = ({ type, placeholder, name, value, checked }) => `
<input type="${type}" placeholder="${placeholder}" name="${name}" value="${!!value ? value : ''}" ${!!checked ? checked : ''}>`;
