/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let pinta = ["\u2660", "\u2663", "\u2665", "\u2665"];
  let number = Math.floor(Math.random() * 10 + 2);
  let royalty = [number, "A", "K", "Q", "J", number, number, number];

  // let result = (pinta[Math.floor(Math.random() * pinta.length)] +=
  //   royalty[Math.floor(Math.random() * royalty.length)]);

  document.querySelector(".pinta").innerHTML =
    pinta[Math.floor(Math.random() * pinta.length)];

  document.querySelector(".number").innerHTML =
    royalty[Math.floor(Math.random() * royalty.length)];
};
