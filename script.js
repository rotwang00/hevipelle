let clicks = 0;

function clicked() {
  clicks += 1;
  document.getElementById("clicks").textContent = `Clicks: ${clicks}`;
}
