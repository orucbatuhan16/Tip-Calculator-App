"use strict";
const container = document.querySelector(".container");
const spanZeroElement = document.querySelector("#zero");
const billValue = document.querySelector("#bill_value");
const button5 = document.querySelector("#five");
const button10 = document.querySelector("#ten");
const button15 = document.querySelector("#fifteen");
const button20 = document.querySelector("#twenty");
const button50 = document.querySelector("#fifty");
const custom = document.querySelector("#Custom");
const numberOfpeople = document.querySelector("#person");
const amount = document.querySelector("#Amount");
const total = document.querySelector("#total");
const reset = document.querySelector(".Reset");

container.addEventListener("input", function (e) {
  const bill = +billValue.value;
  const people = +numberOfpeople.value;
  const perTip = bill / people;
  const displaySelector = function (display) {
    if (people === 0) {
      numberOfpeople.style.borderColor = "#FF8300";
      spanZeroElement.style.color = "#FF8300";
    } else {
      numberOfpeople.style.borderColor = "hsl(172, 67%, 45%)";
    }
    return (spanZeroElement.style.display = `${display}`);
  };
  people === 0 ? displaySelector("block") : displaySelector("none");
  const clear = function () {
    billValue.value = "0";
    numberOfpeople.value = "0";
    total.textContent = "0.00";
    amount.textContent = "0.00";
  };
  // Button 5
  button5.addEventListener("click", function () {
    const tipAmount = perTip * 0.05;
    amount.textContent = tipAmount.toFixed(2);
    total.textContent = (tipAmount + bill / people).toFixed(2);
  });
  button10.addEventListener("click", function () {
    const tipAmount = perTip * 0.1;
    amount.textContent = tipAmount.toFixed(2);
    total.textContent = (tipAmount + bill / people).toFixed(2);
  });
  button15.addEventListener("click", function () {
    const tipAmount = perTip * 0.15;
    amount.textContent = tipAmount.toFixed(2);
    total.textContent = (tipAmount + bill / people).toFixed(2);
  });
  button20.addEventListener("click", function () {
    const tipAmount = perTip * 0.2;
    amount.textContent = tipAmount.toFixed(2);
    total.textContent = (tipAmount + bill / people).toFixed(2);
  });
  button50.addEventListener("click", function () {
    const tipAmount = perTip * 0.5;
    amount.textContent = tipAmount.toFixed(2);
    total.textContent = (tipAmount + bill / people).toFixed(2);
  });
  reset.addEventListener("click", function () {
    clear();
  });
  // Get custom  value
  const customValue = custom.value / 100;
  const tipAmount = perTip * customValue;
  amount.textContent = tipAmount.toFixed(2);
  total.textContent = (tipAmount + bill / people).toFixed(2);

  console.log(bill, people);
});
