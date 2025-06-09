let selectedRoom = "";

const className = localStorage.getItem("class");

document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementsByClassName("h1class")[0]) {
        document.getElementsByClassName("h1class")[0].innerText = "Select room for " + className;
    } else {
        console.log("Element not found");
    } 
});

function joinRoom(){
    if(selectedRoom === ""){
        alert("Please select a room!");
    }
    else{
        alert("Joining " + selectedRoom.textContent);
        localStorage.setItem("selectedRoom", selectedRoom.textContent.slice(-1));
        //Insert backend
        window.location.href = "joinedClass.html";
    }
}

function selectRoom(room){
    if(selectedRoom === ""){
        selectedRoom = room;
        room.style.backgroundColor = "grey";
    }
    else{
        selectedRoom.style.backgroundColor = "white";
        selectedRoom = room;
        room.style.backgroundColor = "grey";
    }
}