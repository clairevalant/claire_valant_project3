// Script for Claire Valant Project 3: Toronto Tattoo Tinder

// add smoothScroll
tattApp.smoothScroll = function(){
    $("header a").smoothScroll({
        offset: -40,
    }); 

    $(".playAgain").smoothScroll({
        offset: -40,
    });
}

tattApp.toggleCheck = function(){

    // If input is checked, change icon and icon colour
    $("label").on("click", function () {
        // remove the changed class of "checked square" on all labels...
        $(this).parents(".questionContainer").find("i").removeClass("fa-check-square").addClass("fa-square");
        // ...add the (styled) class of check square to the i
        $(this).children("i").toggleClass("fa-square fa-check-square");
    })

    // When "Play again?" is clicked, reload the page to get rid of previous answers
    $('.playAgain').click(function () {
        location.reload(true);
    })
}

// an (unsuccessful*) attempt at using a Swipe javascript library to create a Tinder-like card swipe effect
// tattApp.swipeEnable = function() {
//     // use Scroll jQuary library to enable swipe on mobile and tablet
//     $("form").swipe("option", { 
//         threshold: 100,
//     });

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

        console.log(userType);
        console.log(userMeaning);
        console.log(userSize);
        console.log(userStyle);
        console.log(userColour);
        console.log(userCost);
    
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
    
    // filter array of all tattoos for those matching user preferences
    const results = tattApp.allTattoos.filter(function(tatt){
        return tatt.type.includes(uType)
                && tatt.meaning.includes(uMeaning)
                && tatt.size.includes(uSize)
                && tatt.style.includes(uStyle)
                && tatt.colour.includes(uColour)
                && tatt.cost.includes(uCost)
    })
    console.log(results);
    
    // randomly select one tattoo idea for the user and one artist from the list
    // get info from selected object key-value pairs to add to user's displayed results
    // add a screenshot of artist's instagram profile with a link to profile
    // ****NOTE: Instagram doe snot let you embed entire profiles, only single posts. Hopefully this will be updated in future
    const rand = Math.floor(Math.random() * results.length);
    const finalAnswer = results[rand].name;
    const finalAnswerMeaning = results[rand].meaning[3];
    const finalAnswerArtist = results[rand].artist;
    const finalAnswerImage = `<img alt="Screenshot of and link to a suggested tattoo artist's instagram" src="${results[rand].artistImage}">`;
    const finalAnswerInsta = `<a target="_blank" href="${results[rand].artistInsta}">${finalAnswerImage}</a>`;

    // provide the user's randomly selected result from their results array and insert a paragraph in the .results section depending on whether or not the user cares for a "meaning"
    if (uMeaning === "no" || uMeaning === "idcMeaning") {
        // trying to make results appear and have it scroll into view
        $(".results").slideDown("fast", function(){
            window.scrollBy(0, window.innerHeight);
        });
        const paragraph = `<p>You should get a(n) ${finalAnswer} by ${finalAnswerArtist}! Click the image to visit their profile.</p>`;
        $(".resultsTitle").before(finalAnswerInsta);
        $(".resultsTitle").after(paragraph);
    } else {
        $(".results").slideDown("fast", function(){
            window.scrollBy(0, window.innerheight);
        });
        const paragraph = `<p>You should get a(n) ${finalAnswer} by ${finalAnswerArtist}, because ${finalAnswerMeaning}</p>`;
        $(".resultsTitle").before(finalAnswerInsta);
        $(".resultsTitle").after(paragraph);
    }
}

// share results with user! pop up? shuffle in from the right?
// add plugin from instagram

// initiating function
tattApp.init = function() {
    // All methods go here
    // tattApp.swipeEnable();
    tattApp.smoothScroll();
    tattApp.toggleCheck();
    tattApp.formSubmit();

}

// document ready
$(function() {
    tattApp.init();
});