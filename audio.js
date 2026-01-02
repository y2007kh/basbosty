    const audioArea = document.getElementById("audioArea");

    // وقت ظهور آخر سطر (delay + animation duration)
    const showAfter = 2400 + 800; // عدّل لو غيّرت التوقيت

    setTimeout(() => {
        audioArea.classList.add("show");
    }, showAfter);

