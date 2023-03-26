export const input = ({ type, placeholder, name, value, checked }) => {
  const placeholderInput =
    type !== "radio" ? `placeholder="${placeholder}"` : "";
  const classInput = type !== "radio" ? "class='input'" : "";
  const requiredInput = type !== "radio" ? "required" : "";

  return `<input ${classInput} type="${type}"  ${requiredInput} ${placeholderInput} name="${name}" value="${
    value || ""
  }" ${checked || ""}>`;
};
