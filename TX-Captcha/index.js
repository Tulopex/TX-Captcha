let isChecked = false;
    
document.getElementById("captchaSquare").onclick = function() {
    isChecked = !isChecked;
    this.classList.toggle("checked");
};

function checkCaptcha() {
    if (isChecked) {
        document.getElementById("txCaptcha").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
        document.body.style.background = "none";
    } else {
        document.getElementById("captchaMessage").innerText = "TX Captcha не пройдена";
    }
}
window.onload = function() {
    document.getElementById("captchaContainer").style.display = "block";
};