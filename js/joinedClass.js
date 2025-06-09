let currentRoom = localStorage.getItem("selectedRoom");
// console.log(currentRoom);
window.onload = function() {
    if (currentRoom !== null) {
        document.getElementById(currentRoom).style.backgroundColor = "grey";
        document.getElementsByClassName("main-room")[0].innerHTML = "Room " + currentRoom + "<br>(You're here)";   
    }
}

function joinRoom(roomNumber) {
    //Insert backend
    document.getElementsByClassName("main-room")[0].innerHTML = "Room " + roomNumber + "<br>(You're here)";   
    if (currentRoom !== null) {
        document.getElementById(currentRoom).style.backgroundColor = "white";
    }
    document.getElementById(roomNumber).style.backgroundColor = "grey";
    currentRoom = roomNumber;
    localStorage.setItem("selectedRoom", roomNumber);
}

function leaveClass(site) {
    if (window.confirm("Are you sure you want to leave this class?")) {
        localStorage.removeItem("selectedRoom");
        window.location.href = site;
    }
}
