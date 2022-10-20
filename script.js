function displayDate() {
  const today = new Date();
  document.getElementById("date").textContent = today.toLocaleDateString("sv");

  document.getElementById("time").textContent = today.toLocaleTimeString(
    "GMT-0400",
    { hourCycle: "h24" }
  );
}

setInterval(displayDate, 1000);
