document.addEventListener("DOMContentLoaded", function() {
    // Select the color-box and change-color-btn elements
    var colorBox = document.getElementById("color-box");
    var changeColorBtn = document.getElementById("change-color-btn");

    // Function to generate a random color
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Event listener for the change-color-btn
    changeColorBtn.addEventListener("click", function() {
        // Change the background color of the color-box to a random color
        colorBox.style.backgroundColor = getRandomColor();
    });
});
