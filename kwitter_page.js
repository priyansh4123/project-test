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
room_name=localStorage.getItem("room_names");
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value=""
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";




row=name_with_tag+message_with_tag;
document.getElementById("output").innerHTML=row;
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_names");
      window.location.replace("index.html")
}