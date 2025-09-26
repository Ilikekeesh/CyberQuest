        // DONT TOUCH I THINK!!
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
        import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js"; 
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyAAFRjOzkZtUt1B4Y7ZyxY1jqzGEgrHyAQ",
          authDomain: "cyberquest-56c56.firebaseapp.com",
          projectId: "cyberquest-56c56",
          storageBucket: "cyberquest-56c56.firebasestorage.app",
          messagingSenderId: "700377095732",
          appId: "1:700377095732:web:92c8ccd34e3a4029ef3461",
          measurementId: "G-EJSTCGB7CQ"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const auth = getAuth(app);


        //inputs
        //submit button
        const submit = document.getElementById('submit');
        submit.addEventListener("click", function (event) {
            event.preventDefault()

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    alert("Creating Account!")
                // Signed up 
                    const user = userCredential.user;
                // ...
                })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
                // ..
            });
        })