document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup-window");
    const closeBtn = document.getElementById("close-btn");
    const timeToShow = 5 * 1000; // 30 seconds
    let popupShown = false;

    function showPopup() {
        popup.style.display = "block";
        popupShown = true;
    }

    function hidePopup() {
        popup.style.display = "none";
    }

    // Check if popup was already shown
    if (localStorage.getItem("popupShown") === "true") {
        popupShown = true;
    }

    // Show popup after specified time
    setTimeout(function() {
        if (!popupShown) {
            showPopup();
            localStorage.setItem("popupShown", "true");
        }
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
