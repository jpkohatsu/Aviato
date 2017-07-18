//This code is for the search bar animations
$(document).ready(function() {
  //jquery goes inside


});

// Functions to hide/show the searchResults and login form ////

$("#btnLogout").on("click", function() {
  // window.location.href="file:///Users/BrentG/Desktop/Aviato/index.html";
  $(".container").addClass("hide");
        $(".signInForm").removeClass("hide");
        $("#btnLogout").addClass("hide");
});



  // on.Clicks for navbar buttons


$(".search").on("click", function() {
  $(".myJobsPage").addClass("hide hoverable");
  $(".searchBar").removeClass("hide");
  $(".resultCards").removeClass("hide");
  $(this).addClass("hide");
  $(".heart").removeClass("hide");
});

$(".heart").on("click", function() {
    $(".searchBar").addClass("hide");
    $(".resultCards").addClass("hide");
    // addClass hide when we have buttons
    $(".myJobsPage").removeClass("hide");
    $(this).addClass("hide");
    $(".search").removeClass("hide");
});



// After submit, the Load More button appears
// $(".theSubmitButton").on("click", function() {
//   $(".loadMore").removeClass("hide");
//
// });




function generateJobsResults(apiData) {
  // Start list, as required by jTinder
  var $resultsList = $("<ul>");
  $(".myJobsPage").append($resultsList);

  // Create card elements
  for (var i=0; i < jobsArray.length; i++) {


    var url = jobsArray[i].url;
    console.log("this is the url " + url);

    var title = jobsArray[i].jobtitle;
    var company = jobsArray[i].company;
    var formattedLocation = jobsArray[i].formattedLocation;
    var snippet= jobsArray[i].snippet;
    var timeSinceSubmitted = jobsArray[i].formattedRelativeTime;
    // var = jobsArray[i].
    // To make it more huamn readable, save large block of HTML as an array
    var output = [
      "<div class='result card medium sticky-action'>",
      "<div class='card-image waves-effect waves-block waves-light'>",
      "<img class='activator' src='http://via.placeholder.com/600x300?text=company+logo'>",
      "</div>",
      "<div class='card-content'>",
      "<span class='card-title activator grey-text text-darken-4'><i class='material-icons right'>more_vert</i></span>",
      "<h5>" + title + "</h5>",
      "</div>",
      "<div class='card-action'><a href='title' class='trashButton'><i class='material-icons right'>thumb_down</i></a></div>",
      "<div class='card-reveal'>",
      "<span class='card-title grey-text text-darken-4'>" + title + "<i class='material-icons right'>close</i></span>",
      //add the job info to the card reveal drawn from the api "Card Title" //
      "<h5>" + company + "</h5>",
      '<hr>',
      "<span class='card-title grey-text text-darken-4'></span>" + formattedLocation,

      "<span class='card-title grey-text text-darken-4'></span>" + snippet,

      "<span class='card-title grey-text text-darken-4'></span>" + timeSinceSubmitted,
//

      "</div>",
      "</div>",

    ];
    output = output.join("");
    var li = $('<li/>').addClass('pane'+i).html(output).appendTo($resultsList);
    console.log(li);
   }
};
  $(".card").on("swipeleft",function(){
    console.log("swipeLeft");
  });

  $(".card").on("swiperight",function(){
    console.log("swipeRight");
  });





//  $(document).on("click", ".likeButton", function(e) {
//   generateJobsResults(searchResults);
//  });
