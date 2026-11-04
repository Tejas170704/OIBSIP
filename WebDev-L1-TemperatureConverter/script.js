
const input = document.getElementById("temperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const result = document.getElementById("result");

function toCelsius(value, unit) {
    if (unit === "C") return value;
    if (unit === "F") return (value - 32) * 5 / 9;
    if (unit === "K") return value - 273.15;
}

function fromCelsius(value, unit) {
    if (unit === "C") return value;
    if (unit === "F") return (value * 9 / 5) + 32;
    if (unit === "K") return value + 273.15;
}

document.getElementById("convertBtn").addEventListener("click", function () {
    const value = Number(input.value);
    const source = fromUnit.value;
    const target = toUnit.value;

    if (input.value.trim() === "" || !Number.isFinite(value)) {
        result.textContent = "Please enter a valid temperature.";
        return;
    }

    const celsius = toCelsius(value, source);

    if (celsius < -273.15) {
        result.textContent = "Temperature cannot be below absolute zero.";
        return;
    }

    const converted = fromCelsius(celsius, target);

    const symbols = {
        C: "°C",
        F: "°F",
        K: "K"
    };

    result.textContent =
        `${value} ${symbols[source]} = ${converted.toFixed(2)} ${symbols[target]}`;
});
