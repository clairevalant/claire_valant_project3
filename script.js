// Script for Claire Valant Project 3: Toronto Tattoo Tinder

// empty object in which to store everything
const tattApp = {};

// when an input is selected, add a class of the label to "selected" to change the color to #ff616f

// initialize an array to contain all "possible" tattoos
tattApp.allTattoos = {
        tatt1: {
            name: "arrow",
            type: ["basic", "hippie", "minimalist"],
            meaning: ["yes", "it only flies forewards toward its goal. Anyone that stands in your way gets hit"],
            size: ["small"],
            style: ["trendy", "traditional"],
            colour: "black",
            cost: ["$"],
            artist:["Miniminiminiatures"],
        },
        tatt2: {
            name:"chain link fence with a hole in it",
            style:["punk", "metal"],
            meaning:["yes", "you have broken through obstacles in your life. Note: this assumes that you have broken through obstacles in your life"],
            size:["medium"],
            style:["trendy"],
            colour:"no",
            cost:["$$"],
            artist:["Rat666Tat"],
        },
        tatt3: {
            name:"skull",
            style:["punk", "metal"],
            meaning:["yes", "it is a reminder of the impermenance of life / memento mori if you wanna sound Latin about it"],
            size:["small", "medium", "large"],
            style:["traditional"],
            colour:"black",
            cost:["$","$$","$$$"],
            artist:["c00pc00ptatt00s"],
        },
        //   tatt4: {
        //     name:,
        //     style:[],
        //     meaning:[],
        //     size:,
        //     style:,
        //     colour:,
        //     cost:,
        //     artist:,
        // },
        //   tatt5: {
        //     name:,
        //     style:[],
        //     meaning:[],
        //     size:,
        //     style:,
        //     colour:,
        //     cost:,
        //     artist:,
        // },
        // tatt6: {
        //     name:,
        //     style:,
        //     meaning:,
        //     size:,
        //     style:,
        //     colour:,
        //     cost:,
        //     artist:,
        // },
        // tatt7: {
        //     name:,
        //     style:,
        //     meaning:,
        //     size:,
        //     style:,
        //     colour:,
        //     cost:,
        //     artist:,
        // },
        // tatt8: {
        //     name:,
        //     style:,
        //     meaning:,
        //     size:,
        //     style:,
        //     colour:,
        //     cost:,
        //     artist:,
        // },
        // tatt9: {
        //     name:,
        //     style:,
        //     meaning:,
        //     size:,
        //     style:,
        //     colour:,
        //     cost:,
        //     artist:,
        // },
        // tatt10: {
        //     name:,
        //     style:,
        //     meaning:,
        //     size:,
        //     style:,
        //     colour:,
        //     cost:,
        //     artist:,
        // },
        // tatt11: {
        //     name:,
        //     style:,
        //     meaning:,
        //     size:,
        //     style:,
        //     colour:,
        //     cost:,
        //     artist:,
        // },
        // tatt12: {
        //     name:,
        //     style:,
        //     meaning:,
        //     size:,
        //     style:,
        //     colour:,
        //     cost:,
        //     artist:,
        // },
        // tatt13: {
        //     name:,
        //     style:,
        //     meaning:,
        //     size:,
        //     style:,
        //     colour:,
        //     cost:,
        //     artist:,
        // },
        // tatt14: {
        //     name:,
        //     style:,
        //     meaning:,
        //     size:,
        //     style:,
        //     colour:,
        //     cost:,
        //     artist:,
        // },
        // tatt15: {
        //     name:,
        //     style:,
        //     meaning:,
        //     size:,
        //     style:,
        //     colour:,
        //     cost:,
        //     artist:,
        // },
        // tatt16: {
        //     name:,
        //     style:,
        //     meaning:,
        //     size:,
        //     style:,
        //     colour:,
        //     cost:,
        //     artist:,
        // },
        // tatt17: {
        //     name:,
        //     style:,
        //     meaning:,
        //     size:,
        //     style:,
        //     colour:,
        //     cost:,
        //     artist:,
        // },
        // tatt18: {
        //     name:,
        //     style:,
        //     meaning:,
        //     size:,
        //     style:,
        //     colour:,
        //     cost:,
        //     artist:,
        // },
        // tatt19: {
        //     name:,
        //     style:,
        //     meaning:,
        //     size:,
        //     style:,
        //     colour:,
        //     cost:,
        //     artist:,
        // },
        // tatt20: {
        //     name:,
        //     style:,
        //     meaning:,
        //     size:,
        //     style:,
        //     colour:,
        //     cost:,
        //     artist:,
        // },
};

// when the form is submitted,
tattApp.formSubmit = function(){
    $("form").on("submit", function (event) {
        event.preventDefault();

        // get values from inputs, assign them to constants
        const userType = $("input[name=type]:checked").val();
        const userMeaning = $("input[name=meaning]:checked").val();
        const userSize = $("input[name=size]:checked").val();
        const userStyle = $("input[name=style]:checked").val();
        const userColour = $("input[name=colour]:checked").val();
        const userCost = $("input[name=cost]:checked").val();
    
        // check that all questions are filled out
        if (userType == undefined ||
            userMeaning == undefined ||
            userSize == undefined ||
            userStyle == undefined ||
            userColour == undefined ||
            userCost == undefined) {
                alert("Please answer all questions!");
        } else {
            // pass results to filter tattoo array
            tattApp.userResults(userType, userMeaning, userSize, userStyle, userColour, userCost);
        }

    });
}

// filter allTattoos array for only objects with properties relevant to user
tattApp.findResults = function(uType, uMeaning, uSize, uStyle, uColour, uCost) {
    const results = tattApp.allTattoos.filter(function(tatt){
        return 
    })
}

// randomly select one tattoo idea for the user and one artist from the list

// share results with user! pop up? shuffle in from the right?

// initiating function
tattApp.init = function() {
    // All methods go here
    tattApp.formSubmit();
}

// document ready
$(function() {
    tattApp.init();
});