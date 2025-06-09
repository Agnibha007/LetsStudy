let counter = "";

function selectClass(className) {
    if (counter != "") {
        document.getElementById(className).style.backgroundColor = "grey";
        document.getElementById(counter).style.backgroundColor = "white";
        counter = className;
    }
    else {
        document.getElementById(className).style.backgroundColor = "grey";
        counter = className;
        localStorage.setItem("class", className);
    } //Insert code for sending the details to server
}

function next() {
    if(counter != "") {
        window.location.href = "../html/finalDetail.html";
    }
    else {
        alert("Please select a class");
    }
}
