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
function selection(link){
    var options = document.querySelectorAll('#links a');
    options[0].className = "";
    options[1].className = "";
    options[2].className = "";
    options[3].className = "";
    options[4].className = "";
    link.className = "seleccionado";

    var x = document.getElementById("nav");
    if(x.className === "responsive"){
        x.className = "";
    }
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

