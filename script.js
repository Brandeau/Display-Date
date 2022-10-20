function displayDate() {
  const today = new Date();
  document.getElementById("chile-date").textContent =
    today.toLocaleDateString("sv");

  document.getElementById("chile-time").textContent = today.toLocaleTimeString(
    "GMT-0400",
    { hourCycle: "h24" }
  );

  document.getElementById("buddhist-date").textContent =
    today.toLocaleDateString("th-TH");

  document.getElementById("buddhist-time").textContent =
    today.toLocaleTimeString("sv", {
      timeZone: "Asia/Bangkok",
      hourCycle: "h24",
    });

  document.getElementById("japan-date").textContent = today.toLocaleDateString(
    "ja-JP-u-ca-japanese",
    { era: "long" }
  );

  document.getElementById("japan-time").textContent = today.toLocaleTimeString(
    "ja-JP",
    {
      timeZone: "Asia/Tokyo",
      hourCycle: "h24",
    }
  );
}

setInterval(displayDate, 1000);
