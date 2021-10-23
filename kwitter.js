  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCZKrCrbyqCZYtmltnUthfSf7pJhh3ZvT0",
    authDomain: "chatter-76b15.firebaseapp.com",
    databaseURL: "https://chatter-76b15-default-rtdb.firebaseio.com",
    projectId: "chatter-76b15",
    storageBucket: "chatter-76b15.appspot.com",
    messagingSenderId: "12910016726",
    appId: "1:12910016726:web:a09c0a20c2583a7309f177" 
  };
  // Initialize Firebase  
  firebase.initializeApp(firebaseConfig);
var naming=localStorage.getItem("user_name");
console.log(naming);
document.getElementById("hold_user").innerHTML="Welcome "+naming+"!!!";
function room(){
  var room_name=document.getElementById("room").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"Adding Room Name"
  });
  localStorage.setItem("local_room_name",room_name);
  window.location="kwitter_message.html";
}
function getData() {
firebase.database().ref("/").on('value',function(snapshot) {
  document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {
    childKey =childSnapshot.key;
    Room_names = childKey;
    //Start Code
    var htmling="<div id='"+Room_names+"' onclick='redirectToRoomName'>"+Room_names+"</div>";
    document.getElementById("trending").innerHTML+=htmling;
    //End Code
  });});}
    getData();
    function redirectToRoomName(room_namer){
      localStorage.setItem("local_room_name",room_namer);
      window.location="kwitter_page.html";
    }
    function loge(){
      localStorage.removeItem("local_room_name");
      window.location="index.html";
    }