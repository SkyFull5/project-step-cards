import { inputDefaultVisit } from "./utils/inputDefaultVisit.js";
import { inputDoctorVisit } from "./utils/inputDoctorVisit.js";

export class CreateVisit {
  constructor(doctor = "") {
    this.doctor = doctor;
  }

  renderElement() {
    const render = inputDefaultVisit.map((item) => {
      if (item.type === "dropdown") {
        return item.renderContent(item);
      } else {
        return item.renderContent(item);
      }
    });
    return `<form id="form">${render.join("")}</form>`;
  }
  changeDoctor(value) {
    this.doctor = value;
  }

  renderInputDoctor(value) {
    const newInput = inputDoctorVisit.map((item) => {
      if (item.value === value) {
        return item.content.map((content) => {
          if (content.type === "text") {
            return content.renderContent(content);
          } else {
            return content.renderContent(content);
          }
        });
      }
    });
    const filter = newInput.filter((item) => !!item);
    return `<div class="doctor-inputs">${
      !!filter.length && filter[0].join("")
    }</div> `;
  }
}
