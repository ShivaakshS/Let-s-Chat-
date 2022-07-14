
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyC6SLhJsGTfHn_9EX5BnL0alqIbbppgF5U",
      authDomain: "kwitter-fe433.firebaseapp.com",
      databaseURL: "https://kwitter-fe433-default-rtdb.firebaseio.com",
      projectId: "kwitter-fe433",
      storageBucket: "kwitter-fe433.appspot.com",
      messagingSenderId: "291000948178",
      appId: "1:291000948178:web:bec1cd5f2ae7b6518fa40b"
    };

    firebase.initializeApp(firebaseConfig);

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
