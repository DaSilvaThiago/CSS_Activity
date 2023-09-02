//aqui declarei um variavel constante que indica a temperatura em kelvin dada no exercicio.
const kelvin = 255.5;
//aqui calculei a temperatura dada kelvin, converendo para celcius.
let celcius = kelvin-273.15;
//aqui converti a temperatura kelvin em fahrenheit.
let fahrenheit = celcius*(9/5)+32;
//aqui eu arredondei para baixo o valor guardado na variavel fahrenheit.
fahrenheit = Math.floor(fahrenheit);
console.log(`A temperatura é ${fahrenheit}
graus Fahrenheit`);
console.log(`A temperatura em Newton é ${Math.floor(celcius * (33/100))}`);
