document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup-window");
    const closeBtn = document.getElementById("close-btn");
    const timeToShow = 5 * 1000;
    let popupShown = false;

    function showPopup() {
        if (!localStorage.getItem("popupShown")) {
            popup.style.display = "block";
            localStorage.setItem("popupShown", "true");
        }
    }

    function hidePopup() {
        popup.style.display = "none";
    }

    // Show popup after specified time
    setTimeout(function() {
            showPopup();
    }, timeToShow);

    // Close popup on button click
    closeBtn.addEventListener("click", function() {
        hidePopup();
    });

    // Close popup on background click
    popup.addEventListener("click", function(event) {
        if (event.target === popup) {
            hidePopup();
        }
    });
});
