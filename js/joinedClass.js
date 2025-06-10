let currentRoom = localStorage.getItem("selectedRoom");
// console.log(currentRoom);
window.onload = function () {
    if (currentRoom !== null) {
        document.getElementById(currentRoom).style.backgroundColor = "grey";
        document.getElementsByClassName("main-room")[0].innerHTML = "Room " + currentRoom + "<br>(You're here)";
    }
}

document.addEventListener('keydown', function (event) {
    let key = event.key;
    if (key >= '1' && key <= '9') {
        joinRoom(parseInt(key));
    } else if (key === '0') {
        joinRoom(10);
    } else if (key === '-') {
        joinRoom(11);
    } else if (key === '=') {
        joinRoom(12);
    } else if (key.toLowerCase() === 'q') {
        joinRoom(13);
    } else if (key.toLowerCase() === 'w') {
        joinRoom(14);
    } else if (key.toLowerCase() === 'e') {
        joinRoom(15);
    }
});

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
