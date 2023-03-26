export const dropdown = ({ dropdownContent, id, name }) => {
  const options = dropdownContent
    .map(
      (item) =>
        `<option value='${item.value}' ${item.selected}>${item.title}</option>`
    )
    .join("");

  return `<select class='dropdown' id='${id}' required name='${name}'>${options}</select>`;
};
