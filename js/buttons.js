const params = new URLSearchParams(window.location.search);
const from = params.get("from") || "Alguien";
const to = params.get("to") || "Tú";

document.getElementById("question").innerHTML =
`${to} ❤️<br>¿Quieres ser mi Valentine?`;

const noBtn = document.getElementById("no");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

document.getElementById("yes").addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="final">
      <h1>💖 ¡Gracias ${to}! 💖</h1>
      <p>${from} dice:</p>
      <p>Eres la mejor persona del mundo<br>y me haces muy feliz.</p>
    </div>
    <footer>Created by Antonio Jiménez Rivera</footer>
  `;
});
