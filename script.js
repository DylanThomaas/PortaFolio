//funcion que muestra el menu
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className === ""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

//funcion que desaparece el menu al seleccionar
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    opciones[5].className = "";
    link.className = "seleccionado";

    var x= document.getElementById("nav");
    x.className = "";
}

//Funcion para cambiar de idioma
const flagsElement = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]");  

const changeLanguage = async language =>{
    const requestJson = await fetch (`./languages/${language}.json`);
    const texts  = await requestJson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        
        textToChange.innerHTML = texts[section][value];
    }
};


flagsElement.addEventListener("click",(e)=>{
    changeLanguage(e.target.parentElement.dataset.language);
});

