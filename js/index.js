let ScrollMouseInterval = setInterval(() => {
    let mouse_1_scroll = document.getElementById("mouse_1_scroll");
    let pageYOffset = window.pageYOffset;

    if (pageYOffset >= 100) {
        mouse_1_scroll.style.top = "14px"
    }

    if (pageYOffset >= 200) {
        mouse_1_scroll.style.top = "20px"
    }

    if (pageYOffset >= 300) {
        mouse_1_scroll.style.top = "24px"
    }

    if (pageYOffset >= 500) {
        mouse_1_scroll.style.top = "28px";
    }
    
    if (pageYOffset < 100) {
        mouse_1_scroll.style.top = "12px"
    }
}, 10);