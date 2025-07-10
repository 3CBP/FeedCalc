function calculateRation() {
  const inputs = document.querySelectorAll(".feed");
  let totalDM = 0;

  inputs.forEach(input => {
    const weight = parseFloat(input.value) || 0;
    const dmFactor = parseFloat(input.dataset.dm);
    totalDM += weight * dmFactor;
  });

  document.getElementById("result").innerText = `Total Dry Matter: ${totalDM.toFixed(2)} lb`;
}

function printRation() {
  window.print();
}

function saveRation() {
  const result = document.getElementById("result").innerText;
  localStorage.setItem("savedRation", result);
  alert("Ration saved!");
}