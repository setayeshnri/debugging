"use strict";

let formEl = document.querySelector("#search");
//Syntax error, search was closed with a single quote instead of a double quote, found the error in console pointing to the line.
let cityInputEl = document.querySelector("#city");
//Runtime error, querySelector was misspelled, found the error in console pointing to the line
let tempEl = document.querySelector("#temp");
let messageEl = document.querySelector("#message");
//Syntax error on lines 3, 5, 7 and 8, there were no # behind the names to target the id's with, found errors in console pointing to the lines.

async function getData() {
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInputEl.value}&appid=8f20807cea52eed92572aea82df038d5`
  );
  let data = await res.json();

  let temp = data.main.temp - 273.15;
  //Logical error, main was missing in fetching temp, used console.log to find which line was the error from.

  tempEl.textContent = Math.round(temp) + "°C";
  //Logical error, Forgot to round up the temp, saw the problem while testing if the code works.

  if (temp < 0) {
    messageEl.textContent = "Winter is coming...";
  } else if (temp <= 10) {
    messageEl.textContent = "Sweater weather!";
  } else if (temp < 21) {
    messageEl.textContent =
      "Put a jacket on and regret it as soon as you start moving";
  } else if (temp >= 21) {
    messageEl.textContent = "Hotter outside than Taylor Swift's latest single";
  }
}
/**  Logical errors on lines 23, 25, 27 and 30, they were pointing to the wrong tempertaures so 
 wrong messages were shown after running the code , saw the problem while testing the code. */
formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  getData();
});
/** Logical, Syntax and RuntimeRuntime errors on line 36,there were missing parenthesis behind the opening
of the curly braces and there was an e which was supposed to be event.
event was not set as the value, found the errors in the console pointing to the incorrect line. */

//Logical error, line 37, there was no event before the preventDefault, found the error in the console pointing to the incorrect line.
