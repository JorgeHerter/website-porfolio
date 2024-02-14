// tollay.js code checker

function validateForm() {
    var name = document.getElementById('name').value;
    if (name === '') {
        alert('Name must be filled out');
        return false;
    }
}