var a = Number(document.getElementById('avalue').value)
var b = Number(document.getElementById('bvalue').value)
var c = Number(document.getElementById('cvalue').value)
var result = document.getElementById('result')

function deltaCalc() {
    let resultado = Math.pow(b, 2) - 4 * a * c
    result.innerText = `O valor de delta é: ${resultado}`
    return resultado
}

function calcularBhaskara() {
    let resultadoBhaskara = (-b + Math.sqrt(deltaCalc())) / (2 * a)
    let resultadoBhaskara2 = (-b - Math.sqrt(deltaCalc())) / (2 * a)
    result.innerText += ` O valor de x' é ${resultadoBhaskara.toFixed(4)}`
    result.innerText += ` O valor de x'' é ${resultadoBhaskara2.toFixed(4)}`

}