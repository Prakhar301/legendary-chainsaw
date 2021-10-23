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
user=localStorage.getItem("user_name");
room_name=localStorage.getItem("local_room_name");
function send(){
    var msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        like:0,
        message:msg,
        name:user
    });
    document.getElementById("msg").innerHTML="";
}