$(document).ready(function() {
  //jquery goes inside
  
});
  // Section 1


  //End Section 1


  // on.Clicks for navbar buttons
  $(".search").on("click", function() {
    $(".myJobsPage").addClass("hide hoverable");
    $(".searchBar").removeClass("hide");
    $(".resultCards").removeClass("hide");
});

$(".heart").on("click", function() {
    $(".searchBar").addClass("hide");
    $(".resultCards").addClass("hide");
    // addClass hide when we have buttons
    $(".myJobsPage").removeClass("hide");
});

  // This code is for the hover over the icons //
  $(".icon").mouseenter(function() {
    $(this).addClass("red lighten-4");
  }).mouseleave(function() {
    $(this).removeClass("red lighten-4");
}
);


// Adding Cards to MyJobsPage //
// Eventually, we'll replace this with actual data returned from the Indeed API
var searchResults = {
   "version":2,
   "query":"java",
   "location":"austin, tx",
   "paginationPayload":"",
   "radius":25,
   "dupefilter":true,
   "highlight":true,
   "totalResults":1027,
   "start":1,
   "end":10,
   "pageNumber":0,
   "results":[
      {
         "jobtitle":"Sr Java Developer - 100% REMOTE",
         "company":"32 Solutions Ltd",
         "city":"Austin",
         "state":"TX",
         "country":"US",
         "language":"en",
         "formattedLocation":"Austin, TX",
         "source":"Indeed",
         "date":"Fri, 07 Jul 2017 11:40:31 GMT",
         "snippet":"SENIOR <b>JAVA</b> DEVELOPER- REMOTE!*. 7+ years of strong <b>Java</b> experience. REMOTE, TELECOMMUTE, &quot;WFH&quot;, &quot;WORK FROM HOME&quot;, <b>JAVA</b>, &quot;<b>JAVA</b> DEVELOPER&quot;, &quot;<b>JAVA</b> ENGINEER&quot;,...",
         "url":"http://www.indeed.com/viewjob?jk=350f3ed1d50c483c&qd=-rwpQqCdjiCk71gxCvmfvYkfvtV3Dc3RrUkp06tbHgQRdIPXjia8Il1dvSZwyXqeR-oVqGs3p5RN_VqdvBtjK3dMYrDpF203Uj5KaVUyZ5k&indpubnum=2548872276202692&atk=1bkpi2ntc18de388",
         "onmousedown":"indeed_clk(this,'1497');",
         "latitude":30.266483,
         "longitude":-97.74176,
         "jobkey":"350f3ed1d50c483c",
         "sponsored":false,
         "expired":false,
         "indeedApply":true,
         "formattedLocationFull":"Austin, TX",
         "formattedRelativeTime":"4 days ago",
         "stations":""
      },
      {
         "jobtitle":"Sr. Java/J2EE Developer",
         "company":"Dutech Systems Inc",
         "city":"Austin",
         "state":"TX",
         "country":"US",
         "language":"en",
         "formattedLocation":"Austin, TX",
         "source":"Indeed",
         "date":"Mon, 26 Jun 2017 03:54:26 GMT",
         "snippet":"Overall 9+ years of experience in delivering technology solutions, web development experience working on Windows/Linux, <b>Java</b> platform with HTML5, CSS,...",
         "url":"http://www.indeed.com/viewjob?jk=b6287ac3cc18c4ca&qd=-rwpQqCdjiCk71gxCvmfvYkfvtV3Dc3RrUkp06tbHgQRdIPXjia8Il1dvSZwyXqeR-oVqGs3p5RN_VqdvBtjK3dMYrDpF203Uj5KaVUyZ5k&indpubnum=2548872276202692&atk=1bkpi2ntc18de388",
         "onmousedown":"indeed_clk(this,'1497');",
         "latitude":30.266483,
         "longitude":-97.74176,
         "jobkey":"b6287ac3cc18c4ca",
         "sponsored":false,
         "expired":false,
         "indeedApply":true,
         "formattedLocationFull":"Austin, TX",
         "formattedRelativeTime":"15 days ago",
         "stations":""
      },
      {
         "jobtitle":"Java Application Developer",
         "company":"Teacher Retirement System of Texas",
         "city":"Austin",
         "state":"TX",
         "country":"US",
         "language":"en",
         "formattedLocation":"Austin, TX",
         "source":"Indeed",
         "date":"Thu, 06 Jul 2017 07:28:23 GMT",
         "snippet":"Experience developing applications using <b>Java</b> J2EE/EJB, JSP, and Struts. Join our <b>Java</b> development team and that's what you'll get....",
         "url":"http://www.indeed.com/viewjob?jk=849db3014ecc6a4f&qd=-rwpQqCdjiCk71gxCvmfvYkfvtV3Dc3RrUkp06tbHgQRdIPXjia8Il1dvSZwyXqeR-oVqGs3p5RN_VqdvBtjK3dMYrDpF203Uj5KaVUyZ5k&indpubnum=2548872276202692&atk=1bkpi2ntc18de388",
         "onmousedown":"indeed_clk(this,'1497');",
         "latitude":30.266483,
         "longitude":-97.74176,
         "jobkey":"849db3014ecc6a4f",
         "sponsored":false,
         "expired":false,
         "indeedApply":true,
         "formattedLocationFull":"Austin, TX",
         "formattedRelativeTime":"5 days ago",
         "stations":""
      },
      {
         "jobtitle":"Full Stack Developer",
         "company":"Plane Script",
         "city":"Austin",
         "state":"TX",
         "country":"US",
         "language":"en",
         "formattedLocation":"Austin, TX",
         "source":"Indeed",
         "date":"Mon, 10 Jul 2017 01:29:00 GMT",
         "snippet":"Love programming? Have passion in web & app development? We are a profound tech start up looking for a lead developer who is passionate and adept in",
         "url":"http://www.indeed.com/viewjob?jk=441a96ec1bb3fc9a&qd=-rwpQqCdjiCk71gxCvmfvYkfvtV3Dc3RrUkp06tbHgQRdIPXjia8Il1dvSZwyXqeR-oVqGs3p5RN_VqdvBtjK3dMYrDpF203Uj5KaVUyZ5k&indpubnum=2548872276202692&atk=1bkpi2ntc18de388",
         "onmousedown":"indeed_clk(this,'1497');",
         "latitude":30.318682,
         "longitude":-97.74176,
         "jobkey":"441a96ec1bb3fc9a",
         "sponsored":false,
         "expired":false,
         "indeedApply":true,
         "formattedLocationFull":"Austin, TX 78756",
         "formattedRelativeTime":"1 day ago",
         "stations":""
      },
      {
         "jobtitle":"Senior Software Engineer, Backend Java",
         "company":"HomeAway",
         "city":"Austin",
         "state":"TX",
         "country":"US",
         "language":"en",
         "formattedLocation":"Austin, TX",
         "source":"HomeAway",
         "date":"Wed, 05 Jul 2017 22:28:13 GMT",
         "snippet":"About Us: Have you ever had the opportunity to impact the lives of millions of people in a meaningful way and help them enjoy time away with their friends",
         "url":"http://www.indeed.com/viewjob?jk=31d4ac84ea5222c0&qd=-rwpQqCdjiCk71gxCvmfvYkfvtV3Dc3RrUkp06tbHgQRdIPXjia8Il1dvSZwyXqeR-oVqGs3p5RN_VqdvBtjK3dMYrDpF203Uj5KaVUyZ5k&indpubnum=2548872276202692&atk=1bkpi2ntc18de388",
         "onmousedown":"indeed_clk(this,'1497');",
         "latitude":30.266483,
         "longitude":-97.74176,
         "jobkey":"31d4ac84ea5222c0",
         "sponsored":false,
         "expired":false,
         "indeedApply":false,
         "formattedLocationFull":"Austin, TX",
         "formattedRelativeTime":"5 days ago",
         "stations":""
      },
      {
         "jobtitle":"Java Developer I",
         "company":"Wesco Aircraft",
         "city":"Austin",
         "state":"TX",
         "country":"US",
         "language":"en",
         "formattedLocation":"Austin, TX",
         "source":"Wesco Aircraft",
         "date":"Thu, 06 Jul 2017 05:02:58 GMT",
         "snippet":"Wesco Aircraft has more than 2,700 employees across 57 locations globally with net sales of $1.5 billion in 2016....",
         "url":"http://www.indeed.com/viewjob?jk=b8b3dcaaa3d27c36&qd=-rwpQqCdjiCk71gxCvmfvYkfvtV3Dc3RrUkp06tbHgQRdIPXjia8Il1dvSZwyXqeR-oVqGs3p5RN_VqdvBtjK3dMYrDpF203Uj5KaVUyZ5k&indpubnum=2548872276202692&atk=1bkpi2ntc18de388",
         "onmousedown":"indeed_clk(this,'1497');",
         "latitude":30.434011,
         "longitude":-97.73989,
         "jobkey":"b8b3dcaaa3d27c36",
         "sponsored":false,
         "expired":false,
         "indeedApply":false,
         "formattedLocationFull":"Austin, TX 78727",
         "formattedRelativeTime":"5 days ago",
         "stations":""
      },
      {
         "jobtitle":"Lead Java Developer",
         "company":"Logic Information Systems, Inc.",
         "city":"Austin",
         "state":"TX",
         "country":"US",
         "language":"en",
         "formattedLocation":"Austin, TX",
         "source":"Logic Information Systems, Inc.",
         "date":"Tue, 11 Jul 2017 03:16:17 GMT",
         "snippet":"<b>Java</b>, .NET framework). Lead development efforts to customize <b>Java</b> based Micros code including and offshore resources....",
         "url":"http://www.indeed.com/viewjob?jk=fd7729ce57614f6c&qd=-rwpQqCdjiCk71gxCvmfvYkfvtV3Dc3RrUkp06tbHgQRdIPXjia8Il1dvSZwyXqeR-oVqGs3p5RN_VqdvBtjK3dMYrDpF203Uj5KaVUyZ5k&indpubnum=2548872276202692&atk=1bkpi2ntc18de388",
         "onmousedown":"indeed_clk(this,'1497');",
         "latitude":30.266483,
         "longitude":-97.74176,
         "jobkey":"fd7729ce57614f6c",
         "sponsored":false,
         "expired":false,
         "indeedApply":false,
         "formattedLocationFull":"Austin, TX",
         "formattedRelativeTime":"16 hours ago",
         "stations":""
      },
      {
         "jobtitle":"Sr. Java Software Development Engineer",
         "company":"Charles Schwab",
         "city":"Austin",
         "state":"TX",
         "country":"US",
         "language":"en",
         "formattedLocation":"Austin, TX",
         "source":"Charles Schwab",
         "date":"Sat, 08 Jul 2017 10:21:38 GMT",
         "snippet":"I.e. Mainframe Cobol apps/DB2 to <b>Java</b> apps/SQL or MongoDB. <b>Java</b>, Spring framework, cloud development and Web Services (REST, SOAP) supporting high volume...",
         "url":"http://www.indeed.com/viewjob?jk=db7d93e0a861599f&qd=-rwpQqCdjiCk71gxCvmfvYkfvtV3Dc3RrUkp06tbHgQRdIPXjia8Il1dvSZwyXqeR-oVqGs3p5RN_VqdvBtjK3dMYrDpF203Uj5KaVUyZ5k&indpubnum=2548872276202692&atk=1bkpi2ntc18de388",
         "onmousedown":"indeed_clk(this,'1497');",
         "latitude":30.175825,
         "longitude":-97.72527,
         "jobkey":"db7d93e0a861599f",
         "sponsored":false,
         "expired":false,
         "indeedApply":false,
         "formattedLocationFull":"Austin, TX 73344",
         "formattedRelativeTime":"3 days ago",
         "stations":""
      },
      {
         "jobtitle":"Java developer",
         "company":"Intellisoft Technologies",
         "city":"Austin",
         "state":"TX",
         "country":"US",
         "language":"en",
         "formattedLocation":"Austin, TX",
         "source":"Intellisoft Technologies",
         "date":"Thu, 15 Jun 2017 03:22:09 GMT",
         "snippet":"<b>JAVA</b> Skills Deep knowledge of J2EE with emphasis on pure <b>Java</b>, JMS. Well versed in object oriented methodologies using <b>Java</b>....",
         "url":"http://www.indeed.com/viewjob?jk=b55724711c31bfc9&qd=-rwpQqCdjiCk71gxCvmfvYkfvtV3Dc3RrUkp06tbHgQRdIPXjia8Il1dvSZwyXqeR-oVqGs3p5RN_VqdvBtjK3dMYrDpF203Uj5KaVUyZ5k&indpubnum=2548872276202692&atk=1bkpi2ntc18de388",
         "onmousedown":"indeed_clk(this,'1497');",
         "latitude":30.395605,
         "longitude":-97.74725,
         "jobkey":"b55724711c31bfc9",
         "sponsored":false,
         "expired":false,
         "indeedApply":false,
         "formattedLocationFull":"Austin, TX 78759",
         "formattedRelativeTime":"26 days ago",
         "stations":""
      },
      {
         "jobtitle":"Grails/Java Developer",
         "company":"TAVHealth",
         "city":"Austin",
         "state":"TX",
         "country":"US",
         "language":"en",
         "formattedLocation":"Austin, TX",
         "source":"TAVHealth",
         "date":"Thu, 06 Jul 2017 08:41:31 GMT",
         "snippet":"4+ years of experience developing <b>Java</b>, Grails, or Spring web applications. We’re looking for a talented and dependable engineer with <b>Java</b> development skills...",
         "url":"http://www.indeed.com/viewjob?jk=259dc6a0be124035&qd=-rwpQqCdjiCk71gxCvmfvYkfvtV3Dc3RrUkp06tbHgQRdIPXjia8Il1dvSZwyXqeR-oVqGs3p5RN_VqdvBtjK3dMYrDpF203Uj5KaVUyZ5k&indpubnum=2548872276202692&atk=1bkpi2ntc18de388",
         "onmousedown":"indeed_clk(this,'1497');",
         "latitude":30.266483,
         "longitude":-97.74176,
         "jobkey":"259dc6a0be124035",
         "sponsored":false,
         "expired":false,
         "indeedApply":true,
         "formattedLocationFull":"Austin, TX",
         "formattedRelativeTime":"5 days ago",
         "stations":""
      }
   ]
};

$(document).ready(function() {
  // Did this file load?
  console.log("cards.js loaded");

  // Store jobs in an array
  var jobsArray = searchResults.results;
  // Can we traverse the data?
  console.log("City: "+jobsArray[0].city);

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


      "</div>",
      "</div>",

    ];
    output = output.join("");
    var li = $('<li/>').addClass('pane'+i).html(output).appendTo($resultsList);
    console.log(li);
  }

  $(".card").on("swipeleft",function(){
    console.log("swipeLeft");
  });

  $(".card").on("swiperight",function(){
    console.log("swipeRight");
  });


});
