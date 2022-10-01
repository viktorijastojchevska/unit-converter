let inputEl = document.getElementById("input-el");
const btn = document.getElementById("btn");
const text1 = document.getElementById("text-1");
const text2 = document.getElementById("text-2");
const text3 = document.getElementById("text-3");



btn.addEventListener("click", function() {

    let feet = inputEl.value * 3.281;
    feet = feet.toFixed(3);

    let meter = 1 / 3.281 * inputEl.value;
    meter = meter.toFixed(3);

    let gallon = inputEl.value * 0.264;
    gallon = gallon.toFixed(3);

    let liter = 1 / 0.264 * inputEl.value;
    liter = liter.toFixed(3);

    let pound = inputEl.value * 2.204;
    pound = pound.toFixed(3);

    let kilogram = 1 / 2.204 * inputEl.value;
    kilogram = kilogram.toFixed(3);


    if (inputEl.value > 0) {
       
        text1.innerHTML = `${inputEl.value} meters = ${feet} feet | ${inputEl.value} feet = ${meter} meters`;
        text2.innerHTML = `${inputEl.value} liters = ${gallon} gallons | ${inputEl.value} gallons = ${liter} liter`;
        text3.innerHTML = `${inputEl.value} kilos = ${pound} pounds | ${inputEl.value} pounds = ${kilogram} kilos`;
    }
})

