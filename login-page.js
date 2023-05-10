const loginForm = document.getElementById("login-form");
const loginErrorMsg = document.getElementById("login-error-msg");
const button_change = document.getElementById("form");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    let user = {
        username: username,
        password: password,
    }
    localstorage.setItem('user', JSON.stringify(user));


    if (username === user.username && password === user.password) {
        alert("You have successfully logged in.");
        localstorage.clear();
        window.location.replace("/index.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})