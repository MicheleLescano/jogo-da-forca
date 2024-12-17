var palavras = Array(
    "Chaves",
    "Kiko",
    "Chiquinha",
    "Madruga",
    "Girafales",
    "Florinda",
    "Clotilde",
    "Popis",
    "Inhonho",
    "Godines"
)

var sorteio = Math.floor( Math.random() * palavras.length )
var palavraSorteada = palavras[sorteio].toUpperCase().split("")
var palavraVazia = []
var erros = 5

palavraSorteada.forEach(
    () => palavraVazia.push("_")
)

console.log(palavraSorteada)
console.log(palavraVazia)


const letra = document.getElementById("letra")
const confirma = document.getElementById("confirma")
const lista = document.getElementById("lista")
const tentativas = document.getElementById("tentativas")
const segredo = document.getElementById("segredo")

var letrasDigitadas = []

tentativas.innerHTML = erros

palavraVazia.forEach(
    (i) => segredo.innerHTML += i + " "
)

function pegaLetra() {
    if( letra.value.trim() == "" ){
        alert("Digite uma letra!")
    } else {
       if( letrasDigitadas.find( (caracter) => letra.value.toUpperCase() == caracter ) ) {
        alert("Letra já digitada!")
        } else {
            letrasDigitadas.unshift( letra.value.toUpperCase()) //"toUpperCase"serve para transformar todas as letras em maiúsculas
        lista.innerHTML = letrasDigitadas
        testaLetra() 
        }
    }

    letra.value = ""       //Apaga o conteúdo da caixa de texto
    letra.focus()          // Posiciona o cursor na caixa de texto
}

function nadaDeNumero(texto){
    confirma.disabled = ""
    confirma.style.cursor = "default"

    if( !/[a-zA-Z]|ç|Ç/.test(texto) ) {
        letra.value = ""
    }
}

function bloquear() {
    confirma.disabled = "disabled"
    confirma.style.cursor = "not-allowed"
}

function testaLetra() {
    for( let i = 0; i < palavraSorteada.length; i++ ){
            if( palavraSorteada[i] == letra.value.toUpperCase() ){
                palavraVazia[i] = letra.value.toUpperCase()
                console.log(palavraVazia)

                segredo.innerHTML = ""
                palavraVazia.forEach(
                    (i) => segredo.innerHTML += i + " "
                )
            } else {
                erros--
                tentativas.innerHTML = erros
                break
            }
        }
    
}

confirma.addEventListener("click", pegaLetra)


