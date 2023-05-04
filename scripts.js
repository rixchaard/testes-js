 function Alerta(){
    alert("Hello worldldlldldldlll???!??!??"); 
 }

 function Data() {
    document.getElementById("data").innerHTML = Date()
}

 function attData(){
    setInterval(Data, 1000)
    Data()
}

function mudarParagrafo() {
    document.getElementById("paragrafo").innerHTML = "Texto alterado através do JS"
}

function clicarParagrafo(){
    document.getElementById("paragrafo").innerHTML = "Você está segurando o mouse"
}

function soltarParagrafo(){
    document.getElementById("paragrafo").innerHTML = "Você soltou o clique do mouse"
}

// function mudarCorDiv(){
//     document.getElementById("quadrado").style.backgroundColor = "#ca0000"
// }

function mudarCorQuadrado(){
    document.getElementById("quadrado").style.backgroundColor = "#ff00f2"
}

function acenderLampada(){
    document.getElementById("quadrado2").classList.replace("apagada","acesa")
}

function apagarLampada(){
    document.getElementById("quadrado2").classList.replace("acesa","apagada")
}
















// RGB mudar de cor aleatório

var num = 0

var cores = ['#ff0000', '#00ff00', '#0000ff']

function mudarCorDiv(){

    numAleatorio = Math.floor(Math.random() * cores.length);


    console.log(numAleatorio)
    num++

    switch (num) {
        case 1:
            document.getElementById("quadrado").style.backgroundColor = cores[numAleatorio]
            break;
        case 2:
            document.getElementById("quadrado").style.backgroundColor = cores[numAleatorio]
            break;
        case 3:
            document.getElementById("quadrado").style.backgroundColor = cores[numAleatorio]
            num = 0
            break;
        default:
            break;
    }
}
