//This code is for the search bar animations
$(document).ready(function() {
  //jquery goes inside

  // Section 1

  //End Section 1

  // on.Clicks for navbar buttons
  $(".search").on("click", function() {
    $(".myJobsPage").addClass("hide hoverable");
    $(".searchBar").removeClass("hide");
    $(".resultCards").removeClass("hide");
    $(this).hide();
    $("#mySearchLabel").hide();
    $(".heart").show();

    $("#myJobsLabel").show();
  });

  $(".heart").on("click", function() {
    $(".searchBar").addClass("hide");
    $(".resultCards").addClass("hide");
    // addClass hide when we have buttons
    $(".myJobsPage").removeClass("hide");

    $(this).hide();
    $(".search").show();

    $("#mySearchLabel").show();
    $("#myJobsLabel").hide();
  });

});
