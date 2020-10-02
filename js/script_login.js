var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn")
function register() {
    x.style.left = "-480px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}
document.querySelector('#sub-btn').addEventListener('click', () => {
    window.location.href = '../index.html';
});