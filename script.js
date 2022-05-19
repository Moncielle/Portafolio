//Declaración para mostrar el año en el footer
const getCurrentYear = () => {
    const d = new Date();
    return d.getFullYear();
};

const setYearIdentifier = () => {
    const printYearDOM = document.getElementById("yearIdentifier");
    printYearDOM.innerHTML = getCurrentYear();
};

//Arreglo de redes sociales para el footer
const SocialNetworks = [
    { name: "Twitter", url:"" , icon: ""},
    { name: "Facebook", url: "", icon: ""},
    { name: "Linkedin", url: "", icon: ""},
    { name: "Gmail", url: "", icon: ""},
];

//funcion para mostrar las redes sociales en el footer
function setSocialNetworksInHTML() {
    const tagSocialNetworks = document.getElementById("socialNetworks");
    var innerHTMLSocialNetworks = "";
    SocialNetworks.forEach((social) =>{
        let socialTemp
        if(social.name === "Twitter"){
            socialTemp = `<span class="social--burbble" style="background-color: #18CEE4">${social.name}</span>`; //poner las comillas con alt + 96
        }else if(social.name === "Facebook"){
            socialTemp = `<span class="social--burbble" style="background-color: #0C42DE">${social.name}</span>`; 
        }else if(social.name === "Linkedin"){
            socialTemp = `<span class="social--burbble" style="background-color: #1568E4">${social.name}</span>`; 
        }else {
            socialTemp = `<span class="social--burbble" style="background-color: #C61A66">${social.name}</span>`; 
        }
        innerHTMLSocialNetworks = innerHTMLSocialNetworks + socialTemp;
    });
    tagSocialNetworks.innerHTML = innerHTMLSocialNetworks;
}


//Arreglo de los proyectos que se insertaran en las tarjetas del main de html
const ProyectosDesarrollados = [
    {
      name: "Curriculum Vitae",
      descripcion: `Es un proyecto básico donde se describe mis experiencias, 
                    habilidades, conocimientos previos y técnicos, mi 
                    educación, entre otras cosas.`,
      imagen: "./img/CV.png",
      url: "",
      tecnologias: ["HTML", "CSS"],
      tiempoDesarrollo: "3 días",
    },
    {
      name: "Clon de Google",
      descripcion: `Este es un proyecto que es clon del 
                    navegador Google, tratando de asimilar todos
                    los componente que maneja.`,
      imagen: "./img/ClonGoogle.png",
      url: "",
      tecnologias: ["HTML", "CSS"],
      tiempoDesarrollo: "2 días",
    },
    {
        name: "Clon de Netflix",
        descripcion: `Este es un proyecto que consta de tres
                      ventanas, la de login, usuarios y la la
                      página principal de Netflix, donde se pueden
                      ver las opciones de series, peliculas, etc.`,
        imagen: "./img/Netflix.png",
        url: "",
        tecnologias: ["HTML", "CSS"],
        tiempoDesarrollo: "5 días",
      },
];

//funcion para mostrar los tarjetas en el main
function setProyectosDesarrollados(){
    let card = "";
    ProyectosDesarrollados.forEach((project)=>{
        card = card +
        `<div class="col">
            <div class="card shadow-sm">
                <img src="${project.imagen}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title text-lg-center">${project.name}</h5>
                    <p class="card-text text-lg-center">${project.descripcion}</p>
                    <p class="card-text text-lg-center">Tiempo de desarrollo: ${project.tiempoDesarrollo}</p>
                    <a class="card-text text-lg-center" href="${project.url}">Ver projecto</a>
                    <div class="row">
                        ${setIcons(project.tecnologias)}
                    </div>
                </div>
            </div>
        </div>`
    });
    document.getElementById("projects").innerHTML = card;
}

//función para colocar las tecnologías ocupadas 
function setIcons(tecnologias){
    let icons = "";
    tecnologias.forEach((tecno) => {
        switch(tecno){
            case "HTML":
                icons = icons + `<div class="col-3">
                                    HTML <i class="fa-brands fa-html5 icons"></i>
                                </div>`
            break;
            case "CSS":
                icons = icons + `<div class="col-3">
                                    CSS <i class="fa-brands fa-css3-alt icons"></i>
                                </div>`
            break;
            case "JS":
                icons = icons + `<div class="col-3">
                                    JS <i class="fa-brands fa-js icons"></i>
                                </div>`
            break;
            case "Bootstrap":
                icons = icons + `<div class="col-3">
                                    B <i class="fa-brands fa-bootstrap icons"></i>
                                </div>`
            break;
        }
    });
    return icons;
}


document.addEventListener("DOMContentLoaded", function(e){
    setYearIdentifier();
    setSocialNetworksInHTML();
    setProyectosDesarrollados();
});