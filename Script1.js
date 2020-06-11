// JavaScript source code




function login() {
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

            
    });

    if (firebase.auth().currentUser == null) {
        window.alert("Email or Password is wrong. Try Again.");
    }
    if (firebase.auth().currentUser != null) {
        window.alert("You are now signed in.");
        document.getElementById("user_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";
    }


}

function check() {


    if (firebase.auth().currentUser == null) {
        document.getElementById("login_div").style.display = "block";
        document.getElementById("user_div").style.display = "none";
    }
    if (firebase.auth().currentUser != null) {

        document.getElementById("user_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";
    }
}

function logout() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
        window.alert("Logged out");
        document.getElementById("login_div").style.display = "block";
        document.getElementById("user_div").style.display = "none";
       
    }).catch(function (error) {
        // An error happened.
    });
}