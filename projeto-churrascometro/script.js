// Carne - 400 gr por pessoa + de 6 horas - 650
// Cerveja - 1200 mL por Pessoa + 6horas - 2000mL
//Refrigerante/agua - 1000mL por Pessoa + 6 horas 1500mL

// crianças valem por 0,5


let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")
let resultado = document.getElementById("resultado")

let button = document.querySelector("button")

button.addEventListener("click", calcular)


function calcular() {

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value


    if (duracao >= 6) {

        let carne = (adultos * 600) + (criancas * 600 / 2)
        let cerveja = (adultos * 1500)
        let bebida = (adultos * 1500) + (criancas * 1500 / 2)
        console.log('Deu certo if')
        console.log(carne, cerveja, bebida)

    } else {
        carne = (adultos * 400) + (criancas * 400 / 2)
        cerveja = (adultos * 1200)
        bebida = (adultos * 1000) + (criancas * 1000 / 2)
        console.log('Deu certo else')
        console.log(carne, cerveja, bebida)

    }
    resultado.innerHTML = `<p>Carne ${carne / 1000} Kg</p> <p>Cerveja ${cerveja / 1000}L</p> <p>Bebida ${bebida / 1000}L</p>`

}

