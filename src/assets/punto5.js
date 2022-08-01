/* Ingresar por pantalla un número entre 1 y 12, luego imprimir en letras el
mes al que corresponde el valor ingresado, la cantidad de días que tiene
ese mes y sus signos del zodiaco. Ejemplo: si el valor ingresado es 5,
entonces imprimir “Mayo”, “31 días”, “Tauro - Géminis”. */

const meses = Number(prompt('Ingrese un numero del 1 - 12'))

switch (meses) {
  case 1:
    alert('Mes: Enero, su signo es Capricornio')
    break
  case 2:
    alert('Mes: Febrero, su signo es  Acuario')
    break

  case 3:
    alert('Mes: Marzo, su signo es Piscis')
    break

  case 4:
    alert('Mes: Abril, y su signo es Aries ')
    break

  case 5:
    alert('Mes: Mayo, su signo es Tauro ')
    break

  case 6:
    alert('Mes: Junio, su signo es Géminis')
    break

  case 7:
    alert('Mes: Julio, su signo es Cáncer')
    break

  case 8:
    alert('Mes: Agosto, su signo es Leo')
    break

  case 9:
    alert('Mes: Septiembre, su signo es Virgo')
    break

  case 10:
    alert('Mes: Octubre, su signo es Libra')
    break

  case 11:
    alert('Mes: Noviembre, su signo es Escorpio')
    break

  case 12:
    alert('Mes: Diciembre, y si signo es Sagitario')
    break
}
