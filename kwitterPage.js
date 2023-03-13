//LINKS FIREBASE
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
    userName = localStorage.getItem("userName");


    document.getElementById("userName").innerHTML = "Olá " + userName + "!";
    
    
    function addRoom() { //adiciona a sala ao kwitter e ao firebase
     roomName = document.getElementById("roomName").value;
    
    
     firebase.database().ref("/").child(roomName).update({
       purpose: "adicionar nome de sala"
     });
    
    
     localStorage.setItem("roomName", roomName);
    
    
    window.location = "kwitterPage.html";
    }
    
    
    function getData() {
     firebase.database().ref("/").on('value', function (snapshot) {
       document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
         childKey = childSnapshot.key;
         roomNames = childKey;
    
    
         //inicio do código para carregar as salas
         console.log("Nome da Sala - " + roomNames);
         row = "<div class='roomName' id=" + roomNames + " onclick='redirectToRoomName(this.id)' >#" + roomNames + "</div><hr>";
         document.getElementById("output").innerHTML += row;
       });
     });
    
    
    }
  getData()
  function logout() {
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
      window.location = "kwitter.html";
      }     