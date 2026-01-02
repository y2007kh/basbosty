    const lastLine = document.querySelector(".poem span:last-child");
    const audioArea = document.getElementById("audioArea");

    lastLine.addEventListener("animationend", () => {
        audioArea.classList.add("show");
    });
const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");

playBtn.onclick = () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸️";
  } else {
    audio.pause();
    playBtn.textContent = "▶️";
  }
};

audio.ontimeupdate = () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
};

progress.oninput = () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
};
