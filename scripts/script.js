// Script for Claire Valant Project 3: Toronto Tattoo Tinder

tattApp.smoothScroll = function(){
    $("header a").smoothScroll({
        offset: 100
    }); 
}


tattApp.toggleCheck = function(){

    // reset all inputs to undefined, so if user reloads page they can start over
    // $("input[type=radio]").val(undefined);

    // If input is checked, change icon and icon colour
    $("label").on("click", function () {
        // remove the changed class of "checked square" on all labels...
        $(this).parents(".questionContainer").find("i").removeClass("fa-check-square").addClass("fa-square");
        // ...add the (styled) class of check square to the i
        $(this).children("i").toggleClass("fa-square fa-check-square");
    })
}

// tattApp.swipeEnable = function() {
//     // use Scroll jQuary library to enable swipe on mobile and tablet
//     $("form").swipe("option", { threshold: 100} );

//     $("form").on("swipe", function() {
//         console.log("swiping!");
//     });
// }

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
                $("input[type=submit]").on("click", function(){
                    $(".alert").slideUp("fast");
                })

        } else {
            // pass results to filter tattoo array method
            tattApp.findResults(userType, userMeaning, userSize, userStyle, userColour, userCost);
        }
    });
}

// filter allTattoos array for only objects with values relevant to user
tattApp.findResults = function(uType, uMeaning, uSize, uStyle, uColour, uCost) {
    
    const results = tattApp.allTattoos.filter(function(tatt){
        return tatt.style.includes(uStyle)
                && tatt.meaning.includes(uMeaning)
                && tatt.size.includes(uSize)
                && tatt.style.includes(uStyle)
                && tatt.colour === uColour
                && tatt.cost.includes(uCost)
    })
    console.log(results);
    
    // randomly select one tattoo idea for the user and one artist from the list
    const rand = Math.floor(Math.random() * results.length);    
    const finalAnswer = results[rand].name;
    const finalAnswerMeaning = results[rand].meaning[3];
    const finalAnswerArtist = results[rand].artist;
    
    // provide the user's randomly selected result from their results array and insert a paragraph in the .results section depending on whether or not the user cares for a "meaning"
    if (uMeaning === "no" || uMeaning === "idcMeaning") {
        const paragraph = `<p>You should get a(n) ${finalAnswer}!</p>`;
        $(".resultsTitle").after(paragraph);
    } else {
        const paragraph = `<p>You should get a(n) ${finalAnswer} because ${finalAnswerMeaning}</p>`;
        $(".resultsTitle").after(paragraph);
    }
}

// share results with user! pop up? shuffle in from the right?
// add plugin from instagram

// initiating function
tattApp.init = function() {
    // All methods go here
    tattApp.swipeEnable();
    tattApp.toggleCheck();
    tattApp.formSubmit();

}

// document ready
$(function() {
    tattApp.init();
});