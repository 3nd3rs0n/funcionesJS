const divA = document.getElementById('a')
const divB = document.getElementById('b')
const divC = document.getElementById('c')
const divD = document.getElementById('d')
const keyDiv = document.getElementById('key')
const keyDiv1 = document.getElementById('key1')
const texto = document.getElementById("texto")


divA.addEventListener('click', cambiarColor)
divB.addEventListener('click', cambiarColor)
divC.addEventListener('click', cambiarColor)
divD.addEventListener('click', cambiarColor)


function cambiarColor (e){
    return (e.target.style.backgroundColor = "black")
}



function cambiar(e){

    let color = "";
   
    if (e.key === 'a' || e.key === 'A'){
        color = "pink"
    } else if (e.key === 's' || e.key === 'S'){
        color = "orange"
    } else if (e.key === 'd' || e.key === 'D'){
        color = "skyblue"
    } 

    if (color != ""){
        keyDiv.style.backgroundColor = color;
        texto.textContent = `se asigno el color ${color} con la letra ${e.key}`
    } else {
        texto.textContent = `no se ha presionado la tecla adecuada `
    }
}

function cambiar1 (e){

    let color1 = "";

    if (e.key === 'q' || e.key === 'Q'){
        color1 = "yellow"
    } else if (e.key === 'w' || e.key === 'W'){
        color1 = "blue"
    } else if (e.key === 'e' || e.key === 'E'){
        color1 = "brown"
    }

    if (color1 != ""){
        keyDiv1.style.backgroundColor = color1;
        texto.textContent = `se asigno el color ${color1} con la letra ${e.key}`
    } else {
        texto.textContent = `no se ha presionado la tecla adecuada `
    }


}

document.addEventListener('keydown', cambiar1)
document.addEventListener('keydown', cambiar)
