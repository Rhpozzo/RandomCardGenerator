/*
    ____                  __                   ______               __   ______                           __
   / __ \____ _____  ____/ /___  ____ ___     / ____/___ __________/ /  / ____/__  ____  ___  _________ _/ /_____  _____
  / /_/ / __ `/ __ \/ __  / __ \/ __ `__ \   / /   / __ `/ ___/ __  /  / / __/ _ \/ __ \/ _ \/ ___/ __ `/ __/ __ \/ ___/
 / _, _/ /_/ / / / / /_/ / /_/ / / / / / /  / /___/ /_/ / /  / /_/ /  / /_/ /  __/ / / /  __/ /  / /_/ / /_/ /_/ / /
/_/ |_|\__,_/_/ /_/\__,_/\____/_/ /_/ /_/   \____/\__,_/_/   \__,_/   \____/\___/_/ /_/\___/_/   \__,_/\__/\____/_/

*/
/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let pinta = ["\u2660", "\u2663", "\u2665", "\u2665"];
  let royalty = ["A", "K", "Q", "J", 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let result = (document.querySelector(".suit").innerHTML =
    pinta[Math.floor(Math.random() * pinta.length)]);

  document.querySelector(".suit").innerHTML = result;

  document.querySelector(".number").innerHTML =
    royalty[Math.floor(Math.random() * royalty.length)];

  document.querySelector(".suit2").innerHTML = result;
};
