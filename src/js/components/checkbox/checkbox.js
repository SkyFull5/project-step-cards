import { input } from "../../UI/index.js";

export const checkbox = (props) => {
  const { title, content } = props;
  const inputs = content.map(
    (item) => `<label>${item.value}${input(props)}</label>`
  );

  return `<label>${title}${inputs.join("")}</label>`;
};
