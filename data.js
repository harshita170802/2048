var firebaseConfig = {
    apiKey: "AIzaSyDTxirjqQH9A3j5nvx1XoyKyPIKBIbdBVM",
    authDomain: "intern-88f50.firebaseapp.com",
    projectId: "intern-88f50",
    storageBucket: "intern-88f50.appspot.com",
    messagingSenderId: "334383157154",
    appId: "1:334383157154:web:077e06738b8c60a9ddacfb",
    measurementId: "G-PT6DZ6YW52"
  };
  
  firebase.initializeApp(firebaseConfig);
  var formData = firebase.database().ref("formData");
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var message = document.querySelector("#message").value;
    
    formData.push({
      name: name,
      email: email,
      message: message
    });
    
    alert("Your message has been sent. Thank you for contacting us!");
  });