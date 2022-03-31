

var firebaseConfig = {
  apiKey: "AIzaSyAuP1vNxSDp4PRtRoXbIFGdcTAu_cimNoE",
  authDomain: "whatsapp-5a839.firebaseapp.com",
  databaseURL: "https://whatsapp-5a839-default-rtdb.firebaseio.com",
  projectId: "whatsapp-5a839",
  storageBucket: "whatsapp-5a839.appspot.com",
  messagingSenderId: "946079188991",
  appId: "1:946079188991:web:4ed705d8433e533985c9ca"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

     user_name=localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="WELCOME "+user_name+"!";
     function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"addingroomname"
      });
      localStorage.setItem("room_name",room_name);
      window.location=("kwitter_page.html")
     }
     function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
console.log(Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
     //End code
     });});}
getData();
function redirectToRoomName(name){
     console.log(name);
     localStorage.setItem("room_names",name);
     window.location=("kwitter_page.html");
}
function logout(){
     localStorage.removeItem("room_name");
     localStorage.removeItem("user_name");
     window.location=("index.html");
}