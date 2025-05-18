function sendOTP() {
    const email = document.getElementById("email").value;
    document.getElementById("email").value = "";
    if (!email.endsWith(".com")) {
        alert("Please enter a valid email");
    }
    else {
        alert("Please Wait");
        document.getElementById("otp").disabled = false;
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("btn-otp").disabled = false;
        document.getElementsByClassName("verify-otp")[0].style.color = "white";
        document.getElementById("otp").placeholder = "Enter OTP";
        alert("OTP sent successfully");
    }
}

function verifyOTP() {
    const otp = document.getElementById("otp").value;
    if (otp === "666333") {
        alert("OTP verified successfully");
    }
    else {
        alert("Incorrect OTP");
    }
    document.getElementById("otp").value = "";
}