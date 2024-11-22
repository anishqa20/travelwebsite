document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        // Simple validation for now
        alert("Login successful!");
        window.location.href = "website.html"; // Redirect to your main page
    } else {
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.style.display = "block";
        errorMessage.textContent = "Please enter both username and password.";
    }
});
