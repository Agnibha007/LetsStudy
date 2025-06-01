let selectedRoom = "";

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
        room.style.backgroundColor = "#6a78de";
    }
    else{
        selectedRoom.style.backgroundColor = "white";
        selectedRoom = room;
        room.style.backgroundColor = "#6a78de";
    }
}