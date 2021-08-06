<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/8.6.8/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/8.6.8/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>

function readResults(year){
  var results = firebase.database().ref(year);
  results.on('value', (data) =>{
    var ranks = data.val();
    document.getElementById("result1").innerHTML = "<br > 1." +ranks[1];
    document.getElementById("result2").innerHTML = "<br > 2." +ranks[2];
    document.getElementById("result3").innerHTML = "<br > 3." +ranks[3];
    document.getElementById("result4").innerHTML = "<br > 4." +ranks[4];
    document.getElementById("result5").innerHTML = "<br > 5." +ranks[5];
    document.getElementById("result6").innerHTML = "<br > 6." +ranks[6];

  })
}
