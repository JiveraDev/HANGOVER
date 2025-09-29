const otpdiv = document.getElementById("otpdiv");
const timerforotp = document.getElementById("timerforotp");

const otpverify = document.getElementById("sendotpbtn");

otpverify.addEventListener("click", function (event) {
  event.preventDefault();
  otpdiv.classList.remove("d-none");
  timerforotp.classList.remove("d-none");
  otpverify.innerHTML = "Verify OTP";
  startTimer();

});