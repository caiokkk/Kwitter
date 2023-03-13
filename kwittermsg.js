const firebaseConfig = {
    apiKey: "AIzaSyCr0eZF3v9ma8FTNlpEH1Ch7yb75UcfQvU",
    authDomain: "kwitter-24a9f.firebaseapp.com",
    databaseURL: "https://kwitter-24a9f-default-rtdb.firebaseio.com",
    projectId: "kwitter-24a9f",
    storageBucket: "kwitter-24a9f.appspot.com",
    messagingSenderId: "167014271269",
    appId: "1:167014271269:web:4572650961fdaced35f2cc"
  };
  firebase.initializeApp(firebaseConfig)
  userName = localStorage.getItem("userName"); roomName = localStorage.getItem("roomName");

function send()
{
 msg = document.getElementById("msg").value;
 firebase.database().ref(roomName).push({
  name:userName,
  message:msg,
  like:0
 });
 
 document.getElementById("msg").value = "";
}
function getData() {
   firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; 
  childData = childSnapshot.val(); 
  if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
  //Start code
     console.log(firebase_message_id);
     console.log(message_data);
     name = message_data['name'];
     message = message_data['message'];
     like = message_data['like'];
     name_with_tag = "<h4> "+ name +"<img class='user_tick'src='tick.png'></h4>";
     message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
  like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
     span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
     row = name_with_tag + message_with_tag +like_button + span_with_tag;       
     document.getElementById("output").innerHTML += row;
  //End code
        } });  }); }
  getData();
  function updateLike(mensageid){
  console.log ("clicked on like button - " + mensageid);
  button_id = mensage_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) +1;
  console.log(updated_likes)

firebase.database().ref(room_Name).child(mensage_id).update({
  like:updated_likes
})
  }