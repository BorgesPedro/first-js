var year = Number(document.getElementById('year').value)
var result = document.getElementById('result')

function calculateYear() {
    let calculationResult = year % 4
    if (calculationResult === 0) {
        result.innerHTML = `<p>The rest of division is ${calculationResult}, <strong>${year} is LEAP YEAR</strong></p>`
    }else{
        result.innerHTML = `<p>The rest of division is ${calculationResult}, <strong>${year} is NOT LEAP YEAR</strong></p>`
    }

}
