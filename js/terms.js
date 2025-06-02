function toggleSubmit() {
    const checkbox = document.getElementById('agree');
    const submitBtn = document.getElementById('submitBtn');

    if (checkbox.checked) {
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = "grey";
        submitBtn.style.color = "white";
    } else {
        submitBtn.disabled = true;
        submitBtn.style.backgroundColor = "white";
        submitBtn.style.color = "grey";
    }
}

function toggleOK() {
    window.history.back();
}
