document.getElementById("period-form").addEventListener("submit", function(e) {
  e.preventDefault();

  let start = new Date(document.getElementById("start-date").value);
  let end = new Date(document.getElementById("end-date").value);
  let cycleLength = (end - start) / (1000 * 60 * 60 * 24); // in days

  let nextPeriodStart = new Date(end);
  nextPeriodStart.setDate(end.getDate() + 28); // assumes 28-day cycle

  alert("Your next period may start on: " + nextPeriodStart.toDateString());

  // Save to local storage for now (until we set up Firebase)
  let periods = JSON.parse(localStorage.getItem("periods")) || [];
  periods.push({ start: start.toDateString(), end: end.toDateString(), cycleLength });
  localStorage.setItem("periods", JSON.stringify(periods));
});
