function openLoginForm() {
    document.getElementById('loginOverlay').style.display = 'flex';
}

function closeLoginForm() {
    document.getElementById('loginOverlay').style.display = 'none';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === "vikash" && password === "kcnit123") {
        alert("Login successful!");
        closeLoginForm();
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password.");
    }
}
