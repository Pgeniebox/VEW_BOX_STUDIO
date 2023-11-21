document.addEventListener('DOMContentLoaded', function() {


setTimeout(() => {
    this.body.style.opacity= "1";
}, 1000);
setTimeout(() => {
    var logo = document.querySelector("#logo")
    logo.style.opacity= "0";
}, 3000);
setTimeout(() => {
    var home = document.querySelector("#home")
    home.style.opacity= "1";
    boot = true;
}, 8000);
});