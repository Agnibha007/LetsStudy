function sendOTP() {
    const email = document.getElementById("email").value;
    if (!email.endsWith(".com")) {
        alert("Please enter a valid email");
    }
    else {
        alert("Please Wait");
        document.getElementById("otp").disabled = false;
        document.getElementById("btn-otp").disabled = false;
        document.getElementsByClassName("verify-otp")[0].style.color = "white";
        document.getElementById("otp").placeholder = "Enter OTP";
        document.getElementById("name").placeholder = document.getElementById("name").value;
        document.getElementById("email").placeholder = document.getElementById("email").value;
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("name").disabled = true;
        document.getElementById("email").disabled = true;
        document.getElementsByClassName("send-otp")[0].disabled = true;
        document.getElementsByClassName("send-otp")[0].style.color = "grey";
        //Insert code here to send OTP to email
        alert("OTP sent successfully");
    }
}

function verifyOTP() {
    if (document.getElementsByClassName("verify-otp")[0].style.color === "white") {
        const otp = document.getElementById("otp").value;
        if (otp === "666333") { // Insert code here for otp verification
            alert("OTP verified successfully");
            document.getElementById("otp").value = "";
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            window.location.href = "../html/classSelection.html";
        }
        else {
            alert("Incorrect OTP");
        }
    }

}