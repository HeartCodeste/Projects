const btnConvert = document.querySelector('.btn-convert');
const btnReset = document.querySelector('.btn-reset');
const btnSwap = document.querySelector('.btn-swap');
const firstUnit = document.querySelector('.first-unit');
const secondUnit = document.querySelector('.second-unit');
const numberInput = document.querySelector('.number-input');
const result = document.querySelector('.result');
let FromUnit = '°C';
let ToUnit = '°F';

const convert = () => {
    if (FromUnit === '°C'){
        let celsius = parseFloat(numberInput.value);
        let fahrenheit = (celsius * 1.8) + 32;
        result.innerHTML = `${celsius} °C to ${fahrenheit.toFixed(2)} °F`;
        numberInput.value = '';
    } else {
        let fahrenheit = parseFloat(numberInput.value);
        let celsius = (fahrenheit - 32) / 1.8;
        result.innerHTML = `${fahrenheit} °F to ${celsius.toFixed(2)} °C`;
        numberInput.value = '';
    }
};

btnConvert.addEventListener('click', function () {
     let parsedValue = parseFloat(numberInput.value);
    if (isNaN(parsedValue)) {
        result.innerHTML = 'Wpisz liczbę...';
        numberInput.value = '';
    } else {
        convert();
    }   
});

btnReset.addEventListener('click', function () {
    result.innerHTML = '';
    numberInput.value = '';
});

btnSwap.addEventListener('click', function() {
    if (FromUnit === '°C'){
        firstUnit.textContent = '°F';
        secondUnit.textContent = '°C';
        FromUnit = '°F';
        ToUnit = '°C';
        result.innerHTML = '';
    } else {
        firstUnit.textContent = '°C';
        secondUnit.textContent = '°F';
        FromUnit = '°C';
        ToUnit = '°F';
        result.innerHTML = '';
    }
});