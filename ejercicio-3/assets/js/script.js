const ele = document.getElementById("ele1");
ele.addEventListener("click", () => {
 return pintar (ele, "yellow");
})    

function pintar (elenew, color = "green"){
    elenew.style.backgroundColor = color;
   }

