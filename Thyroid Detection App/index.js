let submitButton = document.getElementById("submitBtn");
submitButton.addEventListener("click", (e) => predict(e));

function predict(e) {
  e.preventDefault();
  // Get user input values
  let t3Level = parseFloat(document.getElementById("t3").value);
  let tt4Level = parseFloat(document.getElementById("tt4").value);
  let t4uLevel = parseFloat(document.getElementById("t4u").value);
  let ftiLevel = parseFloat(document.getElementById("fti").value);

  // Check the levels based on predefined ranges
  t3Level = getLevel(t3Level, 60,180);
  tt4Level = getLevel(tt4Level, 5.4, 11.5);
  t4uLevel = getLevel(t4uLevel, 5, 12);
  ftiLevel = getLevel(ftiLevel, 6, 11);
  console.log(t3Level, tt4Level, t4uLevel, ftiLevel);
  // Redirect to result page with query parameters
  var queryParams = `t3Level=${t3Level}&tt4Level=${tt4Level}&t4uLevel=${t4uLevel}&ftiLevel=${ftiLevel}`;
  window.location.href = `result.html?${queryParams}`;
}

function getLevel(value, lowRange, highRange) {
  if (value < lowRange) {
    return "Low";
  } else if (value >= lowRange && value <= highRange) {
    return "Normal";
  } else {
    return "High";
  }
}
