// Indeed API ---------------
// var indeedKey = "2548872276202692";
// location: &l=austin%2C+tx
// Meetup API --------------
// var meetupKey = "4678136f382e143935555bf3a387c7c";

console.log("indeed Api js loaded");
var searchResults;

  
$(document).on("click", ".theSubmitButton", function() {
    var query = $("#query").val().trim();
    var location = $("#location").val().trim();
    var radius = $("#radius").val();
   
    // var companySearch = $("#company-search").val().trim();
    // var agencyFilter = $("#agnecy-filter").val().trim();
    // var sourceFilter = $("#source-filter").val();
    // // runQuery(searchTerm, city);
//   $.ajax({
//     url: "http://api.indeed.com/ads/apisearch?publisher=2548872276202692&q="+ query +"&l=&sort=&radius="+ radius +"&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=&v=2&format=json",
//     dataType: "jsonp",
//     jsonpCallback: "logResults"
//   });
// //Add Comment Company


$.ajax({
    url: "http://api.indeed.com/ads/apisearch?publisher=2548872276202692&q="+query+"&l=austin%2C+tx&sort=&radius="+radius+"&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=&v=2&format=json",
    dataType: "jsonp",
    jsonpCallback: "logResults"
  });
  
  function logResults(json){
    // console.log(json);
    // console.log(json.results);
        searchResults = json.results.results;
        
        // for (var i = 0; i < json.results.length; i++) {
        //     console.log("Job Title: " + json.results[i].jobtitle);
        //     console.log("Company: " + json.results[i].company);
        //     // $("#test").append("<div class='myStyling'><p>" + json.results[i].jobtitle + "</p><p>" + json.results[i].company + "</p><p>" + json.results[i].city + "</p><p>" + json.results[i].state + "</p><p>" + json.results[i].country + "</p><p>" + json.results[i].language + "</p><p>" + json.results[i].formattedLocation + "</p><p>" + json.results[i].source + "</p><p>" + json.results[i].date + "</p><p>" + json.results[i].snippet + "</p><p>" + json.results[i].url + "</p><p>" + json.results[i].onmousedown + "</p><p>" + json.results[i].latitude + "</p><p>" + json.results[i].jobkey + "</p><p>" + json.results[i].sponsored + "</p><p>" + json.results[i].expired + "</p><p>" + json.results[i].indeedApply + "</p><p>" + json.results[i].formattedLocationFull + "</p><p>" + json.results[i].formattedRelativeTime + "</p><p>" + json.results[i].stations + "<p></p></div>");
        // }
    // $("#test").html(JSON.stringify(json));
  };
  console.log(searchResults);
   
});
// function runQuery(searchTerm, city) { 

  