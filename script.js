function goToTreatment() {
  // Get selected values
  const wateringTime = document.getElementById("watering-time-select").value;
  const placement = document.getElementById("placement-select").value;

  // Display the treatment page
  document.getElementById("diagnosis-page").style.display = "none";
  document.getElementById("treatment-page").style.display = "block";

  // Set treatment details
  document.getElementById("treatment-details").innerText = "Provide enough water and maintain proper placement.";
  document.getElementById("watering-time-display").innerText = wateringTime === "morning" ? "Morning" : "Evening";
  document.getElementById("placement-display").innerText = placement === "sunlight" ? "In Sunlight" : "In Shaded Area";
}

function goBackToHome() {
  document.getElementById("diagnosis-page").style.display = "block";
  document.getElementById("treatment-page").style.display = "none";
}

function goBackToDiagnosis() {
  document.getElementById("treatment-page").style.display = "none";
  document.getElementById("diagnosis-page").style.display = "block";
}