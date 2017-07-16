/* ====================================
VARIABLES
======================================= */
var cardCounter = 0;
var totalCards;
var jobsArray = [];
var searchResults = [];
var count = 0;
/* ====================================
FUNCTIONS
======================================= */

function animateOffScreen(e, direction) {
  eid = "#"+e;
  e = $(eid);
  console.log("e: " + e);
  var winWidth = parseInt($(window).width());
  var distanceToMove = winWidth;
  var options = {};
  options[direction] = distanceToMove;
  console.log(options);
  $(e).animate(
    options,
    400,
    "easeInQuart",
    function() {
      console.log("Animation complete");
      $(e).css("display","none");
    }
  );
}

function showNextCard() {
  if(cardCounter < totalCards) {
    $("#job"+cardCounter).css("display", "block");
    cardCounter++;
  } else {
    $(".resultCards").html("No more cards.");
  }
}

function generateSearchResults(apiData) {
  // Did this file load?
  console.log("cards.js loaded");


  // Store jobs in an array
  jobsArray = apiData.results;

  // Set global variable to number of jobs returned
  totalCards = jobsArray.length;

  // Create card elements
  for (var i=0; i < jobsArray.length; i++) {
    // To make it more huamn readable, save large block of HTML as an array
    var output = [
      "<div class='job s12 md6' id='job"+i+"'>",
      "<div class='result card' id='"+jobsArray[i].jobkey+"' style='z-index: "+(5000-i)+";'>",
      "<div class='card-image waves-effect waves-block waves-light'>",
      "<img class='activator' src='http://via.placeholder.com/800x200?text=company+logo'>",
      "</div>",
      "<div class='card-content'>",
      "<h4 class='grey-text text-darken-1'>"+jobsArray[i].company+"</h4>",
      "<span class='card-title activator grey-text text-darken-4'>"+jobsArray[i].jobtitle+"</span>",
      "<p>"+jobsArray[i].snippet+"</p>",
      "<p><a href='"+jobsArray[i].url+"' target='_blank'>View full post</a></p>",
      "</div>",
      "<div class='card-action'>",
      "<a class='dislikeButton' href='#'><i class='material-icons'>cancel</i></a>",
      "<a class='likeButton' href='#'><i class='material-icons'>check_circle</i></a></div>",
      "</div>",
      "</div>"
    ];
    output = output.join("");
    $(".resultCards").append(output);
  }
  // Show the first card
  showNextCard();
}

  function logResults(json){

        searchResults = json;
        // console.log(searchResults);
        generateSearchResults(searchResults);

  }

/* ====================================
DOCUMENT.READY
======================================= */
$(document).ready(function() {


  $(document).on("click", ".theSubmitButton", function(e) {
      e.preventDefault();
      var query = $("#query").val().trim();
      var radius = $("#radius").val();
    $.ajax({
      url: "http://api.indeed.com/ads/apisearch?publisher=2548872276202692&q="+query+"&l=austin%2C+tx&sort=&radius="+radius+"&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=&v=2&format=json",
      dataType: "jsonp",
      jsonpCallback: "logResults"
    });


  });

  // Handlers for the like/dislike buttons on cards
  $(document).on("click", ".likeButton", function(e) {
    e.preventDefault();
    console.log("Like button clicked");
    showNextCard();
    var id = this.closest(".job");
    id = $(id).attr("id");
    animateOffScreen(id, "left");


   //  animateOffScreen(this, "left");
    var id = this.closest(".job");
    id = $(id).attr("id");
    animateOffScreen(id, "left");
    

    //////////////// local storage and moving card to myjobspage

    console.log("adding things to local storage");
    var key = $(this).closest(".job");
    // key = $(key).attr("id");

    // jobCardsArray.push(key);
    // jobCardsArray.push("foo");
    localStorage.setItem("lastClicked", JSON.stringify(key));

    var controls = $(key).attr("id");
    console.log(controls);

    // BUG: Because this is happening *before* the clone(), the user sees the
    // card controls "disappear" before the card is animated off screen
    $("#"+controls+" .card-action").remove();
    $(key).attr("style", "display: block; position: relative !important;");
    $(key).clone().appendTo(".myJobsPage");


    ////////////////

  }); // like button

  $(document).on("click", ".dislikeButton", function(e) {
    e.preventDefault();
    console.log("Dislike button clicked");
    showNextCard();
    var id = this.closest(".job");
    id = $(id).attr("id");
    animateOffScreen(id, "right");
  }); // dislike button

// The counter for how many liked jobs to myJobsPage
  $(document).on("click", ".likeButton", function() {
    count++;
    $("#myJobsCounter").html(count);
    console.log("the like button was clicked");
  });

// The counter for how many meetup events display (Brent)
  // $(document).on("click", ".theSubmitButton", function() {
  //   count++;
  //   $("#meetUpNumbers").html(count);
  //   console.log("the like button was clicked");
  // });


});
