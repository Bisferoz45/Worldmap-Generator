document.addEventListener("DOMContentLoaded", () => {
    const mapForm = document.getElementById("map-form");
    const mapDesk = document.getElementById("map-desk");

    mapForm.addEventListener("submit", (event) => {
        event.defaultPrevented();


    });

});