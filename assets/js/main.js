let divresultado = document.querySelector("#resultado")
var ganadas =0, perdidas=0, contadorjuegos = 0;
let cpuseleccion;
let opciones = ["piedra", "papel", "tijeras"];
let active = false;

let piedraj = document.getElementById("piedra").style;
let papelj = document.getElementById("papel").style;
let tijerasj = document.getElementById("tijeras").style;
let piedracpu = document.getElementById("piedracpu").style;
let papelcpu = document.getElementById("papelcpu").style;
let tijerascpu = document.getElementById("tijerascpu").style;

function select(seleccion){
    if(!active){
        cpuseleccion = opciones[Math.floor(Math.random()*3)];
        let resultado = "Empate";
        contadorjuegos++;
        active = true;
        seleccion == "piedra"? piedraj.cssText = "margin-top: 100px; margin-left: 100px":piedraj.marginLeft = "-100px";
        seleccion == "papel"? papelj.cssText = "margin-top: 100px; margin-left: 100px":papelj.marginLeft = "-100px";
        seleccion == "tijeras"? tijerasj.cssText = "margin-top: 100px; margin-left: 100px":tijerasj.marginLeft = "-100px";
        cpuseleccion == "piedra"? piedracpu.cssText = "margin-top: 100px; margin-left: 50px":piedracpu.marginLeft = "250px";
        cpuseleccion == "papel"? papelcpu.cssText = "margin-top: 100px; margin-left: 50px":papelcpu.marginLeft = "250px";
        cpuseleccion == "tijeras"? tijerascpu.cssText = "margin-top: 100px; margin-left: 50px":tijerascpu.marginLeft = "250px";
    
        seleccion == cpuseleccion ? divresultado.innerHTML = "Empate" :
        seleccion == "piedra"? (cpuseleccion == "tijeras") ? resultado = "Ganaste" : resultado = "Perdiste":
        seleccion == "papel"? (cpuseleccion == "piedra") ? resultado = "Ganaste" : resultado = "Perdiste":
        seleccion == "tijeras"? (cpuseleccion == "papel") ? resultado = "Ganaste" : resultado = "Perdiste": console.log("No pasa nada")
    
        divresultado.innerHTML = resultado;
        if(resultado == "Ganaste"){
            document.querySelector("#containerGameplay").style.backgroundPosition = "left center";
            ganadas++
            document.querySelector("#ganadas").style.fontSize = "25px"
        }
        else if (resultado == "Perdiste"){
            document.querySelector("#containerGameplay").style.backgroundPosition = "right center";
            document.querySelector("#perdidas").style.fontSize = "25px"
            perdidas ++;
        }
        document.querySelector("#contador").innerHTML = `<h3> Contador de juegos: ${contadorjuegos} </h3>`;
        document.querySelector("#ganadas").innerHTML = `Jugador: ${ganadas}`;
        document.querySelector("#perdidas").innerHTML = `CPU: ${perdidas}`;
        setTimeout(reset, 1500);
    }
}

function reset(){
    active = false;
    document.querySelector("#resultado").innerHTML = "";
    document.querySelector("#containerGameplay").style.backgroundPosition = "center center";
    piedraj.cssText = "margin-top: 0; margin-left: 0";
    papelj.cssText = "margin-top: 100px; margin-left: 0";
    tijerasj.cssText = "margin-top: 200px; margin-left: 0";

    piedracpu.cssText = "margin-top: 0; margin-left: 150px";
    papelcpu.cssText = "margin-top: 100px; margin-left: 150px";
    tijerascpu.cssText = "margin-top: 200px; margin-left: 150px";

    document.querySelector("#ganadas").style.fontSize = "16px"
    document.querySelector("#perdidas").style.fontSize = "16px"
}

function empezardenuevo(){
    ganadas =0;
    perdidas=0;
    contadorjuegos = 0;
    document.querySelector("#contador").innerHTML = `<h3> Contador de juegos: ${contadorjuegos} </h3>`;
    document.querySelector("#ganadas").innerHTML = `Jugador: ${ganadas}`;
    document.querySelector("#perdidas").innerHTML = `CPU: ${perdidas}`;
}