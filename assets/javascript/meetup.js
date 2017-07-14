// These variables will be used to build the Meetup API request
var authKey = "2f3f3e6d2a6d20647953153870106d61";
var query;
var radius;

// queryURLBase is the start of our API endpoint.
var queryURLBase = "http://api.meetup.com/find/events?sign=true&key=" +
  authKey;



// FUNCTIONS
// ==========================================================

// This runQuery function expects two parameters:
// (the number of articles to show and the final URL to download data from)
function runQuery(queryURL) {

  // The AJAX function uses the queryURL and GETS the JSON data associated with it.
  // The data then gets stored in the variable called: "NYTData"

  $.ajax({
    url: queryURL,
    method: "GET",
    dataType: "jsonp",
    jsonpCallback: "logResults"
  });
} // runQuery

function logResults(json) {
  console.log(json);
} // logResults

$(document).ready(function() {

  $(document).on('submit','#searchForm', function(e) {
    e.preventDefault();
    // These variables will hold the results we get from the user's inputs via HTML
    query = $("#query").val().trim();
    console.log("query input: " + query);
    radius = $("#radius").val();
    console.log("radius input: " + radius);

    var queryURL = queryURLBase + "&text=" + query + "&radius=" + radius;
    runQuery(queryURL);

  });

});
