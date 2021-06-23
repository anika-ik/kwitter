var firebaseConfig = {
      apiKey: "AIzaSyBb-QLWeGStjzSGXeh8H2xGSjWQChYijv8",
      authDomain: "kwitter-app-222a7.firebaseapp.com",
      databaseURL: "https://kwitter-app-222a7-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-222a7",
      storageBucket: "kwitter-app-222a7.appspot.com",
      messagingSenderId: "57704050734",
      appId: "1:57704050734:web:8dbd20344088d7ef71afbf"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

   
    
user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "welcome " + user_name + "!";


function addRoom(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location= "kwitter_page.html";
}






function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name- " + Room_names);
      row= "<div class='room_name' id="+ Room_names +"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+= row ;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}
