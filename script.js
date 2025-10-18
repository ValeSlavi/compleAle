// Imposta il nome dell'amico dal parametro URL (?name=)
// Esempio: index.html?name=Ale
const params = new URLSearchParams(window.location.search);
const friend = params.get("name") || "Amico";
const nameEl = document.getElementById("friendName");
if (nameEl) {
  nameEl.textContent = friend;
}

// Coriandoli al termine dell'accensione della fiamma
const flameEl = document.querySelector(".flame");
flameEl.addEventListener("animationend", (e) => {
  if (e.animationName === "flame-on") startConfetti();
});

function startConfetti() {
  const root = document.getElementById("confetti");
  const colors = ["#ff4a8d", "#55d6be", "#ffd45a", "#6c8dff", "#ff7b4a"];
  const count = 100;

  for (let i = 0; i < count; i++) {
    const el = document.createElement("span");
    el.className = "piece";
    el.style.left = Math.random() * 100 + "vw";
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.animationDuration = 3.5 + Math.random() * 3 + "s"; // un po’ più lunga
    el.style.animationDelay = Math.random() * 0.8 + "s";
    el.style.width = 6 + Math.floor(Math.random() * 6) + "px";
    el.style.height = 10 + Math.floor(Math.random() * 10) + "px";

    // ORIGINE SOPRA IL TITOLO (molto sopra il top del viewport)
    const startY = -(25 + Math.random() * 40) + "vh";
    el.style.transform = `translateY(${startY}) rotate(${Math.random() * 180 - 90}deg)`;

    root.appendChild(el);
  }
  // pulizia automatica
  setTimeout(() => { root.innerHTML = ""; }, 6000);
}