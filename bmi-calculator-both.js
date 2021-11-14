const container = document.querySelector("section");
const btnCalc = document.getElementById('btn-calc');
const showBmi = document.getElementById('show-bmi');

// document.getElementById('height').value = "";
// document.getElementById('weight').value = "";

btnCalc.addEventListener('click', calcBmi);

function checkLanguage() {
    let language;
    if(container.classList.contains("eng-lang")) {
        language = 'eng';
    }
    return language;
}

function setFields(height, weight) {
    let langMessage1 = checkLanguage();

    if(langMessage1 == 'eng') {
        if(height == "") {
            showBmi.textContent = "Fill the height field!";
        }
        if(weight == "") {
            showBmi.textContent = "Fill the weight field!";
        }
        if(height == "" && weight == "") {
            showBmi.textContent = "Fill the height and weight fields!"
        }
    }
    else {
        if(height == "") {
            showBmi.textContent = "Preencha o campo altura!";
        }
        if(weight == "") {
            showBmi.textContent = "Preencha o campo peso!";
        }
        if(height == "" && weight == "") {
            showBmi.textContent = "Preencha os campos altura e peso!"
        }
    }

    if(height != "") {
        height = height.replace(",", ".");
        weight = weight.replace(",", ".");
    }
    if(height > 10 && height < 100) {
        height = height / 10;
    }
    if(height >= 100) {
        height = height / 100;
    }

    let langFormula = checkLanguage();
    let bmi;

    if(langFormula == 'eng') {
        bmi = 703 * (weight / (Math.pow(height, 2))) / 100;
    }
    else {
        bmi = weight / (Math.pow(height, 2));
    }
    
    bmi = bmi.toFixed(2);
    return bmi;
}

function calcBmi() {
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    let bmiResult = setFields(height, weight);    
    
    if(height != "" && weight != "") {
        showBmi.textContent = bmiResult;
        let langMessage2 = checkLanguage();

        if(langMessage2 == 'eng') {
            if(bmiResult < 18.5) {
                showBmi.textContent = `BMI is ${bmiResult} - Under weight`;
            }
            else if(bmiResult >= 18.5 && bmiResult < 25) {
                showBmi.textContent = `BMI is ${bmiResult} - Normal weight`;
            }
            else if(bmiResult >= 25 && bmiResult < 30) {
                showBmi.textContent = `BMI is ${bmiResult} - Overweight`;
            }
            else if(bmiResult >= 30 && bmiResult < 35) {
                showBmi.textContent = `BMI is ${bmiResult} - Class 1 Obesity`;
            }
            else if(bmiResult >= 35 && bmiResult < 40) {
                showBmi.textContent = `BMI is ${bmiResult} - Class 2 Obesity`;
            }
            else if(bmiResult >= 40) {
                showBmi.textContent = `BMI is ${bmiResult} - Morbid Obesity`;
            }
        }
        else {
            if(bmiResult < 18.5) {
                showBmi.textContent = `IMC é ${bmiResult} - Abaixo do peso`;
            }
            else if(bmiResult >= 18.5 && bmiResult < 25) {
                showBmi.textContent = `IMC é ${bmiResult} - Peso normal`;
            }
            else if(bmiResult >= 25 && bmiResult < 30) {
                showBmi.textContent = `IMC é ${bmiResult} - Sobrepeso`;
            }
            else if(bmiResult >= 30 && bmiResult < 35) {
                showBmi.textContent = `IMC é ${bmiResult} - Obesidade grau 1`;
            }
            else if(bmiResult >= 35 && bmiResult < 40) {
                showBmi.textContent = `IMC é ${bmiResult} - Obesidade grau 2`;
            }
            else if(bmiResult >= 40) {
                showBmi.textContent = `IMC é ${bmiResult} - Obesidade grave`;
            }
        }
    }
}