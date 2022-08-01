/* Escribir un algoritmo que valide si la suma de 2 números ingresados es
positiva, negativa o cero. */

const num1 = Number(prompt('Ingrese primer numero'))
const num2 = Number(prompt('Ingrese segundo numero'))
const suma = num1 + num2

alert(suma)

if (suma < 0) {
  alert(`${suma} es un número positivo`)
} else if (suma === 0) {
  alert(`${suma}`)
} else {
  alert(`${suma} es un número negativo`)
}
