function calculate() {
    let bmi = 0;
    let weightKG = 0;
    let heightCM = 0;
    let heightM = 0;
    let weightLB = 0;
    let heightIN = 0;
    
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const units = document.querySelector('input[name="units"]:checked').value;
    if (units == "Imperial") {
        heightIN = document.getElementById("height").value;
        weightLB = document.getElementById("weight").value;
    }

    if (units == "Metric") {
        heightCM = document.getElementById("height-metric").value;
        weightKG = document.getElementById("weight").value;
    }

    const ageNum = parseInt(age);
    const weightLBNum = parseFloat(weightLB);
    const weightKGNum = parseFloat(weightKG);

    console.log("Age:", ageNum);
    console.log("Height:", heightIN != 0 ? parseFloat(heightIN) : parseFloat(heightCM));
    console.log("Gender:",gender);
    console.log("Weight:", weightLB != 0 ? parseFloat(weightLB) : parseFloat(weightKG));
    console.log("Units:",units);

    if (units == "Imperial") {
        weightKG = weightLBNum / 2.2
        heightCM = heightIN * 2.54
    }

    if (units == "Metric") {
        weightLB = weightKGNum * 2.2
        heightIN = heightCM / 2.54
    }

    heightM = heightCM / 100
    bmi = (weightKG / (heightM * heightM))
    //bmi = Math.round(bmi*10)/10

    console.log("BMI: ", bmi);
    console.log("Height in Inches:", heightIN/12);

    if (units == "Imperial") {
        document.getElementById("bmi-result").innerHTML = `Your weight in KG is ${weightKG.toFixed(2)}<br>Your height in CM is ${heightCM.toFixed(2)}<br>Your BMI is ${bmi.toFixed(1)}`;
    }

    if (units == "Metric") {
        document.getElementById("bmi-result").innerHTML = `Your weight in LB is ${weightLB.toFixed(2)}<br>Your height in IN is ${(Math.floor(heightIN/12)).toFixed(0)} feet and ${(heightIN%12).toFixed(0)} inches<br>Your BMI is ${bmi.toFixed(1)}`;
    }
    

}

function clearForm() {
    document.getElementById("bmi-result").textContent = "";
    document.getElementById("age").value = "";
    document.getElementById("height").value = 68;
    document.getElementById("gender").value = "female";
    document.getElementById("weight").value = "";
    document.getElementById("imperial").checked = true;
    document.getElementById("metric").checked = false;
    updateUnitInput();
    
}

function updateUnitInput() {
    const isImperial = document.getElementById("imperial").checked;

    document.getElementById("imperial-height-group").style.display = isImperial ? "block" : "none";
    document.getElementById("metric-height-group").style.display = isImperial ? "none" : "block";
    document.getElementById("height").value = "68";
    document.getElementById("height-metric").value = "";

    const weightLabel = document.getElementById("weight-label");
    weightLabel.textContent = isImperial ? "Weight (lb):" : "Weight (kg):"
}

window.onload = function() {
  updateUnitInput(); // run once on page load
  document.getElementById("imperial").addEventListener("change", updateUnitInput);
  document.getElementById("metric").addEventListener("change", updateUnitInput);
};
