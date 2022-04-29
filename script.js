"use strict";

const bill = document.querySelector(".inputBill");
const people = document.querySelector(".inputPeople");
const tip = document.querySelector(".tipAmount");
const total = document.querySelector(".totalAmount");
const reset = document.querySelector(".reset");
const billSpan = document.querySelector(".spanone");
const peopleSpan = document.querySelector(".spantwo");
const percent = document.querySelectorAll(".percent");
const custom = document.querySelector(".custom");

//Function
const errorMessage = function (el1, el2) {
  el1.style.display = "inline-block";
  el1.textContent = "Cannot be empty";
  el1.style.color = "red";
  el2.style.border = "1px solid red";
};

const correctMessage = function (el1, el2) {
  el1.style.display = "none";
  el2.style.border = "1px solid green";
};

console.log(custom.getAttribute("placeholder"));

percent.forEach((pos) =>
  pos.addEventListener("click", function () {
    const money = +bill.value;
    const noPeep = +people.value;
    const num = Number.parseInt(pos.textContent, 10);
    const tipp = money * (num / 100);

    if (money === 0 && noPeep === 0) {
      errorMessage(billSpan, bill);
      errorMessage(peopleSpan, people);
    } else if (money !== 0 && noPeep === 0) {
      correctMessage(billSpan, bill);
      errorMessage(peopleSpan, people);
    } else if (money === 0 && noPeep !== 0) {
      errorMessage(billSpan, bill);
      correctMessage(peopleSpan, people);
    } else if (money > 0 && noPeep > 0) {
      correctMessage(billSpan, bill);
      correctMessage(peopleSpan, people);

      tip.textContent = (tipp / noPeep).toFixed(2);
      total.textContent = (money / noPeep).toFixed(2);
    }
  })
);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const money = +bill.value;
    const noPeep = +people.value;
    const special = +custom.value;
    const tipp = money * (special / 100);

    if (special > 0 && special <= 50) {
      if (money === 0 && noPeep === 0) {
        errorMessage(billSpan, bill);
        errorMessage(peopleSpan, people);
      } else if (money !== 0 && noPeep === 0) {
        correctMessage(billSpan, bill);
        errorMessage(peopleSpan, people);
      } else if (money === 0 && noPeep !== 0) {
        errorMessage(billSpan, bill);
        correctMessage(peopleSpan, people);
      } else if (money > 0 && noPeep > 0) {
        correctMessage(billSpan, bill);
        correctMessage(peopleSpan, people);

        tip.textContent = (tipp / noPeep).toFixed(2);
        total.textContent = (money / noPeep).toFixed(2);
      }
    } else {
      custom.style.border = "1px solid red";
      custom.removeAttribute("placeholder");
    }
  }
});

reset.addEventListener("click", function () {
  bill.value = "";
  billSpan.style.display = "none";
  bill.style.border = "none";

  people.value = "";
  peopleSpan.style.display = "none";
  people.style.border = "none";

  custom.value = "";
  custom.style.border = "none";
  custom.setAttribute("placeholder", "Custom");

  tip.textContent = "0.00";
  total.textContent = "0.00";
});
