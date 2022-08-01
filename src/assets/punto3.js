/* Escribir un algoritmo para calcular el índice de masa corporal de una
persona. */

const altura = Number(prompt('Ingrese su altura'))
const peso = Number(prompt('Ingrese su peso corporal'))

const indiceMasa = peso / (altura * altura)

alert(`Su masa corporal es de ${indiceMasa}`)
