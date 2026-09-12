const welcomeReadMore = document.querySelector(".welcome-read-more");

welcomeReadMore.addEventListener("click", function(event) {

    event.preventDefault();

    // Create the popup
    const popup = document.createElement("div");

    popup.className = "welcome-popup";

    // Put the popup content inside
    popup.innerHTML = `
        <div class="popup-content">

            <span class="close-popup">&times;</span>

            <h2>Welcome Party</h2>

            <p>
                A fun-filled Welcome Party Celebration
                with exciting activities and gifts.
            </p>

            <p>
                We are excited to welcome our pupils and
                students back to another amazing school year
                filled with learning, friendship and fun.
            </p>

        </div>
    `;

    // Add the popup to the webpage
    document.body.appendChild(popup);

    // Find the close button
    const closeButton = popup.querySelector(".close-popup");

    // Close the popup when × is clicked
    closeButton.addEventListener("click", function() {

        popup.remove();

    });

});