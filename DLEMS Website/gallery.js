

const buttons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.getAttribute("data-filter");

        galleryItems.forEach(item => {

            if (filter === "all") {
                item.style.display = "block";
            } 
            else if (item.classList.contains(filter)) {
                item.style.display = "block";
            } 
            else {
                item.style.display = "none";
            }

        });

    });

});
