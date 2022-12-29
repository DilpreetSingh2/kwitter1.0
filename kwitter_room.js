
//ADD YOUR FIREBASE LINKS HERE
  var firebaseConfig = {
    apiKey: "AIzaSyB6GMmZvNcrcJtNakQg1b0Y8QslcilnNfk",
    authDomain: "kritterdb.firebaseapp.com",
    databaseURL: "https://kritterdb-default-rtdb.firebaseio.com",
    projectId: "kritterdb",
    storageBucket: "kritterdb.appspot.com",
    messagingSenderId: "514643527838",
    appId: "1:514643527838:web:b003a82314fa18bbf2538f"
  };
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "WELCOME " + user_name + "!";


    function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update(
        {purpose:"adding room name"}
      );
    
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
    
    }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
localStorage.setItem("room_name",name)
window.location ="kwitter_page.html";
}
 function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location ="index.html";
 }

