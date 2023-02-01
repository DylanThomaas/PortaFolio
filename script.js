//funcion que muestra el menu
const iconoNav = document.getElementById("iconoNav");

function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className === "header__nav"){
        x.className = "responsive";
    }else{
        x.className = "header__nav";
    }
};

iconoNav.addEventListener("click",()=>{
    responsiveMenu();
});

//funcion que desaparece el menu al seleccionar
function selection(link){
    var options = document.querySelectorAll('#links a');
    options[0].className = "header__a";
    options[1].className = "header__a";
    options[2].className = "header__a";
    options[3].className = "header__a";
    options[4].className = "header__a";
    link.className = "header__a seleccionado";

    var x = document.getElementById("nav");
    if(x.className === "responsive"){
        x.className = "header__nav";
    }else{
        x.className = "header__nav";
    }
};

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

//Funcion para descargar cv


const cvLanguage = document.getElementById("download");


function cv (){
    if((cvLanguage.textContent=="Descargar CV")){
        console.log("entro")
        cv.cvLanguage.apend
    }else{
        console.log("no entro")
    }
};

cvLanguage.addEventListener("click",(cvLanguage)=>{
    //cv();
    console.log(cvLanguage.target.dataset.href)
});