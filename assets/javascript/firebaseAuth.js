<<<<<<< HEAD
  // Initialize Firebase
 
  var config = {
    apiKey: "AIzaSyAJ0HACKr3aFbEs01K_KOIeESI3XQVLKUI",
    authDomain: "test-1f49b.firebaseapp.com",
    databaseURL: "https://test-1f49b.firebaseio.com",
    projectId: "test-1f49b",
    storageBucket: "test-1f49b.appspot.com",
    messagingSenderId: "102166164821"
  };
  firebase.initializeApp(config);
  
  
  
  var database = firebase.database();

  
  // Get elements
  const txtEmail = document.getElementById("txtEmail");
  const txtPassword = document.getElementById("txtPassword");
  const btnLogin = document.getElementById("btnLogin");
  const btnSignUp = document.getElementById("btnSignUp");
  const btnLogout = document.getElementById("btnLogout");
  
  //add logn event
  btnLogin.addEventListener("click", e => {
     //Get email and pass
     const email = txtEmail.value;
     const pass = txtPassword.value;
     const auth = firebase.auth();
     
     //Sign in 
     const promise = auth.signInWithEmailAndPassword(email, pass);
     promise.catch(e => console.log(e.message));
     
  });
  
  btnSignUp.addEventListener("click", e=> {
       //Get email and pass
     const email = txtEmail.value;
     const pass = txtPassword.value;
     const auth = firebase.auth();
     
     //Sign in 
     const promise = auth.createUserWithEmailAndPassword(email, pass);
     promise.catch(e => console.log(e.message));
  });
  
  $("#btnLogout").on("click", function() {
      firebase.auth().signOut(); 
  });
  
//   btnLogout.addEventListener("click", e => {
//      firebase.auth().signOut(); 
//   });
  
  //add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            console.log(firebaseUser);
            console.log("logged in");
            
        var userId = firebase.auth().currentUser.uid;
        var user = firebase.auth().currentUser;
        if (user) {
            console.log("user exists write some stuff");
          // User is signed in.
          writeUserData(userId,user.email);
        } else {
          // No user is signed in.
        }
                    
            
            $("#btnLogout").removeClass("hide");
        }else{
            console.log("not logged in");
            $("#btnLogout").addClass("hide");
        }
    });
    
    
//     //Google sign in stuff
//     var provider = new firebase.auth.GoogleAuthProvider();
  
//   firebase.auth().signInWithPopup(provider).then(function(result) {
//   // This gives you a Google Access Token. You can use it to access the Google API.
//   var token = result.credential.accessToken;
//   // The signed-in user info.
//   var user = result.user;
//   // ...
  
// }).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
// });
=======
// Initialize Firebase

var config = {
apiKey: "AIzaSyAJ0HACKr3aFbEs01K_KOIeESI3XQVLKUI",
authDomain: "test-1f49b.firebaseapp.com",
databaseURL: "https://test-1f49b.firebaseio.com",
projectId: "test-1f49b",
storageBucket: "test-1f49b.appspot.com",
messagingSenderId: "102166164821"
};
firebase.initializeApp(config);



var database = firebase.database();

// Global variable for authentication
var userId = "";

// Get elements
const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");
const btnLogout = document.getElementById("btnLogout");

//add logn event
btnLogin.addEventListener("click", e => {

    //Get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    //Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

});

btnSignUp.addEventListener("click", e=> {
   //Get email and pass
 const email = txtEmail.value;
 const pass = txtPassword.value;
 const auth = firebase.auth();

 //Sign in
 const promise = auth.createUserWithEmailAndPassword(email, pass);
 promise.catch(e => console.log(e.message));

});

$("#btnLogout").on("click", function() {
  firebase.auth().signOut();
});



//add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
        console.log(firebaseUser);
        console.log("logged in");
        $(".container").removeClass("hide");
        $(".signInForm").addClass("hide");
        $("#btnLogout").addClass("show");


    userId = firebase.auth().currentUser.uid;
    var user = firebase.auth().currentUser;
    if (user) {
        console.log("user exists write some stuff");
      // User is signed in.
    //   writeUserData(userId,user.email);
      database.ref("users/"+userId).update({
        email: user.email
      });
    } else {
      // No user is signed in.
    }

    $("#btnLogout").removeClass("hide");

    }else{
        console.log("not logged in");

        // $(".signInForm").addClass("show");
        // $(".container").addClass("hide");
    }
});

>>>>>>> 26714d0ef3ca5e2f99910f5550b19685800d75a6

var provider = new firebase.auth.GoogleAuthProvider();

function googleSignin() {
   firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;

      console.log(token);
      console.log(user);


   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(error.code)
      console.log(error.message)
   });
};

function googleSignout() {
   firebase.auth().signOut()

   .then(function() {
      console.log('Signout Succesfull')
   }, function(error) {
      console.log('Signout Failed')
   });
};

<<<<<<< HEAD
  // User is signed in.
 function writeUserData(userId,email) {
  firebase.database().ref(userId).set({
    
    email: email
=======

// User is signed in.
function writeUserData(userId,myJobsArray) {

    // database.ref("users/"+userId).update({
    //     myjobs: myJobsArray
    // });

}


function readUserData(userId){

    var pointerToJobArrayOnFirebase = firebase.database().ref("users/"+userId + "/myjobs");
    pointerToJobArrayOnFirebase.on('value', function(snapshot) {
        // clear anything currently in MyJobs page
        $(".myJobsPage").html("");
    var tempJobsArray = snapshot.val();
>>>>>>> 26714d0ef3ca5e2f99910f5550b19685800d75a6
    
        console.log("we have read the stuff");
        for(var i = 0; i < tempJobsArray.length; i++){
            var htmlObject = $(tempJobsArray[i]);
            htmlObject.attr("style", "display: block; position: relative;");
            $(".myJobsPage").append(htmlObject);
        }
    
});
};





// Google Calendar Integration (we can try and see if this works)

// $("#auth").click(function() {
//         var ref = new Firebase("https://greedforge/aviato.firebaseio.com/");

//         ref.authWithOAuthPopup("google", function(error, authData) {
//             if (error) {
//                 console.log("Login Failed!", error);
//                 console.log(error);
//             } else {
//                 console.log("Authenticated successfully with payload:", authData);
//             }
//         }, {
//             "scope": "email, calendar"
//         });

//         return false;
//       });
//       $("#calendar").click(function() {
//         $.getJSON('https://www.googleapis.com/calendar/v3/users/me/calendarList', function(data) {
//             console.log(data);
//         });
//       });
