import {moveElement} from "./move-element.js";

const target = document.getElementById("target");

target.onmousedown = function (evt) {
  moveElement(evt, (element) => {
    console.log(element);
  });
};

target.ondragstart = function (evt) {
  return false;
};
