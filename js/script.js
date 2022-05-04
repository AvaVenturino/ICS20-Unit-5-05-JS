// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-5-04-JS/sw.js", {
    scope: "/ICS20-Unit-5-04-JS/",
  })
}

/**
 * Input
 */
function myButtonClicked() {
  var day = document.getElementById("day").value
  var age = document.getElementById("age").value

  // process
  if (( day == "tuesday" || day == "thursday") || (age > 12 && age < 21)) {
      document.getElementById("answer").innerHTML= "You're eligible for student pricing"
  } else {
      document.getElementById("answer").innerHTML= "You must pay regular price"
  }
}
