// JavaScript source code



function login() {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.

            document.getElementById("user_div").style.display = "block";
            document.getElementById("login_div").style.display = "none";

        } else {
            // No user is signed in.
            document.getElementById("login_div").style.display = "block";
            document.getElementById("user_div").style.display = "none";

        }
    

    var userEmail = document.getElementById("userEmail");
    var userPassword = document.getElementById("userPassword");
    window.alert(userEmail.value + ".." + userPassword.value);

        firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...

            window.alert(error.message)
        });

}