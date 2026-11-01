// Button message

function showMessage() {

    alert(
        "Welcome to my portfolio website!"
    );

}


// Contact form

function sendMessage(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    alert(
        "Thank you " + name +
        "! Your message has been received."
    );

}