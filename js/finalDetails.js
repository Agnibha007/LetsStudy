history.pushState({}, null, "finalDetails");

function handleClick(val) {
    const year = val;
    document.getElementsByClassName("dropdown-content")[0].style.display = "none";
}