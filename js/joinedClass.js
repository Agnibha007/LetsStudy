let currentRoom = localStorage.getItem("selectedRoom");
// console.log(currentRoom);
window.onload = function() {
    if (currentRoom !== null) {
        document.getElementById(currentRoom).style.backgroundColor = "#6a78de";
        document.getElementsByClassName("main-room")[0].innerHTML = "Room " + currentRoom + "<br>(You're here)";   
    }
}

function joinRoom(roomNumber) {
    //Insert backend
    document.getElementsByClassName("main-room")[0].innerHTML = "Room " + roomNumber + "<br>(You're here)";   
    if (currentRoom !== null) {
        document.getElementById(currentRoom).style.backgroundColor = "white";
    }
    document.getElementById(roomNumber).style.backgroundColor = "#6a78de";
    currentRoom = roomNumber;
    localStorage.setItem("selectedRoom", roomNumber);
}
