import { CreateVisit } from "./clases/index.js";

export const testFunc = () => {
  const button = document.querySelector(".btn");
  button.addEventListener("click", () => {
    const newVisit = new CreateVisit();
    document.body.innerHTML += newVisit.renderElement();

    const func = (target, elem) => {
      elem.changeDoctor(target);
      return elem.renderInputDoctor(target);
    };

    const chooseDoctor = document.querySelector("#choose-doctor");
    chooseDoctor.addEventListener("change", (e) => {
      const newInput = document.querySelector(".doctor-inputs");
      newInput && newInput.remove();

      const textarea = document.querySelector("textarea");

      const res = func(e.target.value, newVisit);
      if (e.target.value !== "") {
        textarea.insertAdjacentHTML("beforebegin", res);
      }
    });
  });
};
