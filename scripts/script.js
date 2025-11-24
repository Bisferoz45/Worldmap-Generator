import { Map } from "./map.js";


document.addEventListener("DOMContentLoaded", () => {
    loadReferences();
    const mapForm = document.getElementById("map-form");
    const mapSection = document.getElementById("map-section");

    mapForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const datas = [
            /* GENERAL */
            "G-MpSz", //Map size
            "G-MOA",  //Max ocuped area

            /* NATURE */
            "N-MnZ",  //Min zones
            "N-MxZ",  //Max zones
            "N-ZMS",  //Zone max size
            "N-TMS",  //Total max size

            /* URBAN */
            "U-MnZ",  //Min zones
            "U-MxZ",  //Max zones
            "U-ZMS",  //Zone max size
            "U-TMS",  //Total max size

            /* COMMERCIAL */
            "C-MnZ",  //Min zones
            "C-MxZ",  //Max zones
            "C-ZMS",  //Zone max size
            "C-TMS"   //Total max size
        ];

        /* VALIDACIÓN DE DATOS */
        const errors = [];

        datas.forEach(data => {
            const input = document.querySelector(`input[name="${data}"]`);
            const value = Number(input.value);
        
            if (!(typeof value === "number" && !isNaN(value) && value > 0)) {
                input.classList.add("wrongInput");
                errors.push(getReferencedName(data)); 
            }else{
                input.classList.remove("wrongInput");
            }
        });

        if (errors.length > 0) {
            let errormsg = "ERROR: Los siguientes campos contienen valores inválidos:\n";
            errors.forEach(error => {
                errormsg += `- ${error}\n`;
            });
            alert(errormsg);    
        }else{

            /* GENERACIÓN DE MAPA */ 
            /* CREACIÓN DE CASILLAS DEL MAPA */
            if(!mapSection.hasChildNodes()){
                mapSection.innerHTML = '';
            }
            
            /* ESTABLECIENDO VALORES */
            let totalMapOcupedArea = Math.pow(getValueOf("G-MpSz"), 2) * getValueOf("G-MOA") / 100;
            let startPosMap = [Math.floor(Math.random() * (getValueOf("G-MpSz") - 0) + 0), Math.floor(Math.random() * (getValueOf("G-MpSz") - 0) + 0)];
            let natureValues = [Math.floor(Math.random() * (getValueOf("N-MxZ") - getValueOf("N-MnZ")) + getValueOf("N-MnZ")), getValueOf("N-ZMS"), getValueOf("N-TMS")];
            let urbanValues = [Math.floor(Math.random() * (getValueOf("U-MxZ") - getValueOf("U-MnZ")) + getValueOf("U-MnZ")), getValueOf("U-ZMS"), getValueOf("U-TMS")];
            let commercialValues = [Math.floor(Math.random() * (getValueOf("C-MxZ") - getValueOf("C-MnZ")) + getValueOf("C-MnZ")), getValueOf("C-ZMS"), getValueOf("C-TMS")];
            
            /* GENERAR MAPA */
            let map = new Map(getValueOf("G-MpSz"), totalMapOcupedArea, natureValues, urbanValues, commercialValues);
            map.generateMap(startPosMap, natureValues, urbanValues, commercialValues);

        }
    });
});

let referenceData = {};

function getReferencedName(reference) {
    return referenceData[reference];
}

async function loadReferences() {
    const res = await fetch("./resources/references.json");
    referenceData = await res.json();
}

function getValueOf(data){
    return Number(document.querySelector(`input[name="${data}"]`).value);
}