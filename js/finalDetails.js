function handleClick(val) {
    const year = val;
    document.querySelector(".dropdown-btn").innerText = val.innerText + " ▼";
    toggleDropdown();
    document.getElementById("termsSection").style.display = "block";
}

function showDropdown(mentor) {
    document.getElementsByClassName(mentor)[0].style.backgroundColor = "grey";
    document.getElementById("prepDropdown").style.display = "inline-block";
}

function toggleDropdown() {
    document.getElementById("prepDropdown").classList.toggle("active");
}

window.addEventListener("click", function (e) {
    const dropdown = document.getElementById("prepDropdown");
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
    }
});

function toggleSubmit() {
    const agreeBox = document.getElementById("agree");
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = !agreeBox.checked;
}
