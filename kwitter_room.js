// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDtJwsdDf-4WKyQ9HhxYCzwZjDzOiRBYFA",
      authDomain: "kwitter-c945f.firebaseapp.com",
      databaseURL: "https://kwitter-c945f-default-rtdb.firebaseio.com",
      projectId: "kwitter-c945f",
      storageBucket: "kwitter-c945f.appspot.com",
      messagingSenderId: "429027108213",
      appId: "1:429027108213:web:681587eac499d9b2589f3c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + room_name);
      row = "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)' >#"+ Room_names +"</div<hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name );
        window.location ="kwitter_page.html"
}

function addRoom()
      {
            room_name = document.getElementById("room_name").value;

            firebase.database().ref("/").child(room_name).update({
                  purpose : "adding room name"
            });

            localStorage.setItem("room_name", room_name)

            window.location = "kwitter_page.html";
      }