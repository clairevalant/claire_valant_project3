// Script for Claire Valant Project 3: Toronto Tattoo Tinder

// when an input is selected, add a class of the label to "selected" to change the color to #ff616f
tattApp.toggleCheck = function(){
    console.log("Prgm has started");

    // If input is checked, change icon and icon colour

    // remove class of checked-square from everything else but the clicked one
    
    $("label").on("click", function () {
        // the classes you are toggling must be in the same string !!
        console.log($(this));
        $(this).parents(".questionContainer").find("i").removeClass("fa-check-square");
        console.log($(this).parents(".questionContainer").children("label"));
        
            // console.log(nameOfChecked);
        // $(`label[id=${idOfChecked}]`).children("i").toggleClass("fa-square fa-check-square");
        
        $(this).children("i").toggleClass("fa-square fa-check-square");

    })

    // $("input[type=radio]").on("change", function() {
    //     let idOfChecked = $(this).attr("id");
    //     console.log(idOfChecked);
        
        
    // })
    
}



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
                // show an error message (slide down shows it)
                $(".alert").slideDown("fast");
                $(".alert").on("click", function() {
                        $(this).slideUp("fast")
                });

        } else {
            // pass results to filter tattoo array
            tattApp.findResults(userType, userMeaning, userSize, userStyle, userColour, userCost);
        }
    });
}

// filter allTattoos array for only objects with properties relevant to user
tattApp.findResults = function(uType, uMeaning, uSize, uStyle, uColour, uCost) {
    const results = tattApp.allTattoos.filter(function(tatt){
        return tatt.type === uType && tatt.meaning === uMeaning && tatt.size === uSize && tatt.style === uStyle && tatt.colour === uColour && tatt.cost === uCost
    })

    console.log(results);
    
    // randomly select one tattoo idea for the user and one artist from the list
    // const rand = Math.floor(Math.random * results.length);
    // const finalAnswer = results.rand;
}

// share results with user! pop up? shuffle in from the right?

// initiating function
tattApp.init = function() {
    // All methods go here
    tattApp.toggleCheck();
    tattApp.formSubmit();

}

// document ready
$(function() {
    tattApp.init();
});