/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
const poker = document.querySelectorAll(".poker");
const icon = document.querySelectorAll(".icon");
window.onload = function() {
  const chooseSymbol = Math.floor(Math.random() * 4);
  const chooseCard = Math.floor(Math.random() * 13);
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Q", "J", "K"];
  const symbols = ["♥", "♠️", "♦️", "♣️"];
  let color;
  if (chooseSymbol === 0 || chooseSymbol === 2) color = "red";
  else color = "black";
  poker.forEach(element => {
    element.innerHTML = cards[chooseCard];
    element.style.color = color;
  });
  icon.forEach(element => {
    element.innerHTML = symbols[chooseSymbol];
    element.style.color = color;
  });
};
