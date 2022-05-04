// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-5-05-JS/sw.js", {
    scope: "/ICS20-Unit-5-05-JS/",
  });
}

/**
 * Input
 */
function myButtonClicked() {
  var sideA = document.getElementById("sideA").value;
  var sideB = document.getElementById("sideB").value;
  var sideC = document.getElementById("sideC").value;

  // process
  if (sideA == sideB && sideB == sideC) {
    document.getElementById("answer").innerHTML =
      "This is an equilateral triangle!";
  } else if (sideA == sideB || sideB == sideC || sideA == sideC) {
    document.getElementById("answer").innerHTML =
      "This is an isosceles triangle!";
  } else {
    document.getElementById("answer").innerHTML = "This is a scalene triangle!";
  }
}
