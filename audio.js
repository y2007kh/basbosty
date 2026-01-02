    const lastLine = document.querySelector(".poem span:last-child");
    const audioArea = document.getElementById("audioArea");

    lastLine.addEventListener("animationend", () => {
        audioArea.classList.add("show");
    });
