let celcius = document.querySelector("#input1")
let fahrenheit = document.querySelector("#input2")
let kelvin = document.querySelector("#input3")

celcius.addEventListener("input",()=>{
    let c = parseFloat(celcius.value);
    let f = (c * 9/5) + 32;
    let k = c + 273.15
    fahrenheit.value = f.toFixed(2)
    kelvin.value = k.toFixed(2)
})

fahrenheit.addEventListener("input",()=>{
    let f = parseFloat(fahrenheit.value)
    let c = (f - 32) * 5/9
    let k = (f - 32) * 5/9 + 273.15
    celcius.value = c.toFixed(2)
    kelvin.value = k.toFixed(2)
})

kelvin.addEventListener("input",()=>{
    let k = parseFloat(kelvin.value)
    let c = k - 273.15;
    let f = (k - 273.15) * 9/5 +32
    celcius.value = c.toFixed(2)
    fahrenheit.value = f.toFixed(2)
})