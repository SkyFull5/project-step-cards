import { button } from "../../../../UI/index.js";

export const buttonFormVisit = [
  {
    form: "create-visit",
    buttons: [
      {
        type: "submit",
        id: "button-submit",
        title: "Створити",
        style: "submit",
        renderContent: (props) => button(props),
      },
      {
        type: "reset",
        id: "button-close",
        title: "Скасувати",
        style: "close",
        renderContent: (props) => button(props),
      },
    ],
  },
  {
    form: "editing-visit",
    buttons: [
      {
        type: "submit",
        id: "button-submit",
        title: "Зберегти",
        style: "submit",
        renderContent: (props) => button(props),
      },
      {
        type: "reset",
        id: "button-close",
        title: "Скасувати",
        style: "close",
        renderContent: (props) => button(props),
      },
    ],
  },
];
