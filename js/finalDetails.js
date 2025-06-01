let year = 0;
let mentor = "";
function handleClick(val) {
    year = val;
    document.querySelector(".dropdown-btn").innerText = val.innerText + " ▼";
    toggleDropdown();
    document.getElementById("termsSection").style.display = "block";

    // console.log("Email: " + localStorage.getItem("email"));
    // console.log("Name: " + localStorage.getItem("name"));
}

function showDropdown(mentor) {
    document.getElementsByClassName(mentor)[0].style.backgroundColor = "grey";
    document.getElementById("prepDropdown").style.display = "inline-block";
    mentor = mentor;
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

document.getElementById("submitBtn").addEventListener("click", function (e) {
    if (!e.target.disabled) {
        window.location.href = "html/classes.html";
        localStorage.setItem("mentor", mentor);
        localStorage.setItem("year", year);

    }
});


function toggleSubmit() {
    const agreeBox = document.getElementById("agree");
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = !agreeBox.checked;
}
