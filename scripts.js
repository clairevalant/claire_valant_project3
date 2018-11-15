// Script for Claire Valant Project 3: Toronto Tattoo Tinder

// empty object in which to store everything
const tattApp = {};

// when an input is selected, add a class of the label to "selected" to change the color to #ff616f

// initialize an object to contain all "possible" tattoos
tattApp.allTattoos= {};

// check that all questions are filled out
tattApp.completed = function(){
    $("form").on("submit", function (event) {
        event.preventDefault();
        
        if (document.querySelectorAll("input".val) === null) {
            alert("Please answer all questions!");
        }

    });
}

// get values from inputs,
// assign the values to constants

// filter allTattoos array for only objects with properties relevant to user

// initiating function
tattApp.init(){
    // All methods go here
}

// document ready
$(function() {
    tattApp.init();
});