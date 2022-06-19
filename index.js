// 1. If I click the convert button and there is a numb in the input
// 2. Convert the numb to the three metric
// 3. Put the output to the perfect places
// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound



let inputEl = document.querySelector("#input-el")
let outputLength = document.querySelector("#output-length")
let outputMass = document.querySelector("#output-mass")
let outputVol = document.querySelector("#output-vol")
let buttonEl = document.querySelector("#button-el")
let resetBtn = document.querySelector("#button-res-el")
let doItYourself = document.querySelector("#output-DIY")
let temperature = document.querySelector("#temp-el")


buttonEl.addEventListener("click", function convert() {
    let input = inputEl.value
    
    let lengthFeet = (input * 3.281).toFixed(3)
    let lengthMeter = (input * 0.3047).toFixed(3)

    outputLength.textContent = `${input} meters ${lengthFeet} feet | ${input} feet ${lengthMeter} meters`

    let volumeGallon = (input * 0.264).toFixed(3)
    let volumeLiter = (input * 3.785).toFixed(3)

    outputVol.textContent = `${input} liters ${volumeGallon} gallons | ${input} gallons ${volumeLiter} liters`

    let massPound = (input * 2.204).toFixed(3)
    let massKilogram = (input * 0.4537).toFixed(3)

    outputMass.textContent = `${input} kilograms ${massPound} pounds | ${input} pounds ${massKilogram} kilograms`

    let conversionInch = (input * 0.039).toFixed(3)
    let conversionMili = (input * 25.40).toFixed(3)

    doItYourself.textContent = `${input} milimeters ${conversionInch} inches | ${input} inches ${conversionMili} milimeters`

    let tempFahrenheit = (1.800 * input + 32).toFixed(3)
    let tempCelsius = ((input-32) / 1.800).toFixed(3)

    temperature.textContent = `${input} celsius ${tempFahrenheit} fahrenheit | ${input} fahrenheit ${tempCelsius} celsius`
})

resetBtn.addEventListener("dblclick", function reset() {

    outputLength.textContent = `0 meters = 0.000 feet | 0 feet = 0.000 meters`

    outputVol.textContent = `0 liters = 0.000 gallons | 0 gallons = 0.000 liters`

    outputMass.textContent = `0 kilograms = 0.000 pounds | 0 pounds = 0.000 kilograms`

    doItYourself.textContent = `0 millimeters = 0.000 inches | 0 inches = 0.000 millimeters`

    temperature.textContent = `0 Celsius = 0.000 Fahrenheit | 0 Fahrenheit = 0.000 Celsius`

    inputEl.value = ""
})