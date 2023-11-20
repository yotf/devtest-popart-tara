
function setFontSize() {
    var container = document.querySelector(".button-container");

    if (container) {
        var containerWidth = container.offsetWidth;
        var buttonText = container.querySelector(".button-text");

        if (buttonText) {
            var fontSize = containerWidth * 0.10; // 10% of container width
            buttonText.style.fontSize = fontSize + 'px';
        }
    }
}

// Call setFontSize on window load
window.addEventListener('load', setFontSize);

// Call setFontSize on window resize
window.addEventListener('resize', setFontSize);

$(function () {
    $(document).scroll(function () {

        if ($(this).scrollTop() >= $('#what-is-pygear-header').offset().top - 200) {
            debugger;
            $(".pygear-circuit").addClass("pygear-animation");
        } else {
            $(".pygear-circuit").removeClass("pygear-animation");
        }
    });
});
