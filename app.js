"use strict";

class UserInputError extends Error {}

function takeUserInput() {
  let userMessage;
  try {
    userMessage = prompt("Please enter a message!");
    if(userMessage == "") {
      throw new UserInputError("Error - Message is blank.");
    }
  } catch (error) {
    console.log(error.message);
    document.getElementById("log").innerHTML=`${error.message}`;
    document.getElementById("log").style.color="red";
    return;
  }
  let repeatMessageText;
  let repeatMessageNumber;
  do {
    try {
      repeatMessageText = prompt("How many times would you like your message to be repeated?");
      repeatMessageNumber = Number(repeatMessageText);
      if (!repeatMessageNumber) {
        throw new UserInputError(`Error: Not a Number - "${repeatMessageText}"`);
      }
      else {
        repeatMessage(repeatMessageNumber, userMessage);
      }
    } catch (error) {
      console.log(`${error.message}`);
      let log = document.getElementById("log");
      log.innerText=`${error.message}`;
      log.style.color="red";
      return;
    }
  } while (!repeatMessageNumber);
}

takeUserInput();

function repeatMessage(repeatMessageThisManyTimes, userMessage) {
  for (let i = 0; i < repeatMessageThisManyTimes; i++) {
    console.log(`${i+1}. ${userMessage}`);
    let textNode = document.createTextNode(`${i+1}. ${userMessage}`);
    let br = document.createElement("br");
    let log = document.getElementById("log");
    log.appendChild(textNode);
    log.appendChild(br);
    log.style.color="black";
  }
}

repeatMessage();

function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}
