var firebaseConfig = {
    apiKey: "AIzaSyCF7pFvuPjfo8y4q1UQP-DCqOv44HsMbkk",
    authDomain: "kwitter-project-4aac2.firebaseapp.com",
    databaseURL: "https://kwitter-project-4aac2-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-4aac2",
    storageBucket: "kwitter-project-4aac2.appspot.com",
    messagingSenderId: "119748951382",
    appId: "1:119748951382:web:f6fce4148ca83052562af7"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function logout()
{
    window.location = "index.html";
}

user_name = localStorage.getItem("user_name");





function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    console.log(room_name);

    localStorage.setItem("room_name" , room_name)
    window.location = "Kwitter_page.html";


}

function getData() 

{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row; 

      //End code
      });});}
getData();

function redirectToRoomName()
{
    localStorage.setItem("room_name" , room_name)

    window.location = "Kwitter_page.html";
}


  


      