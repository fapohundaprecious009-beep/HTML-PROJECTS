const mySubmit = document.getElementById("mySubmit");

function myFunction() {

    const messageForm = document.getElementById("messageForm");

    messageForm.innerHTML = `
        <h1>THANK YOU FOR CONTACTING US!</h1>

        <p>
            We have received your message.
            Our team will get back to you as soon as possible.
        </p>
    `;

}