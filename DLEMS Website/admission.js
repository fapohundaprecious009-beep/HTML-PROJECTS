const mySubmit = document.getElementById("mySubmit");

function myFunction(){

    const messageForm=document.getElementById("messageForm");

    messageForm.innerHTML=`
        <h1>APPLICATION SUBMITTED SUCCESSFULLY!</h1><br><br>

        <h3>Thank you for applying to De-Leaders Empire Model Schools.</h3><br>

        <p>
            We have received your application and will review the information provided. 
            Our admission team will contact you using the details you provided regarding the next steps.
        </p><br>

        <p>
        For enquiries, call: 0806 474 7438 | 0903 931 3930
        </p>
    `;

}