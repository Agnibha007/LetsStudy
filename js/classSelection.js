let counter = "";

function selectClass(className) {
    if (counter != "") {
        document.getElementById(className).style.backgroundColor = "#6a78de";
        document.getElementById(counter).style.backgroundColor = "white";
        counter = className;
    }
    else {
        document.getElementById(className).style.backgroundColor = "#6a78de";
        counter = className;
    }
}