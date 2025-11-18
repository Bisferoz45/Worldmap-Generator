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

        /* CREACIÓN DE CASILLAS DEL MAPA */
            if(!mapSection.hasChildNodes()){
                mapSection.innerHTML = '';
            }
            //Matriz: height -> filas, width -> columnas
            let map = Array.from({length: document.querySelector(`input[name="G-MpSz"]`).value}, () => 
                      Array.from({length: document.querySelector(`input[name="G-MpSz"]`).value}, () => 0)
            );

            const startCordX = Number(Math.floor(Math.random() * (Number(document.querySelector(`input[name="G-MpSz"]`).value))));
            let startCordY = Number(Math.floor(Math.random() * (Number(document.querySelector(`input[name="G-MpSz"]`).value))));
            
            console.log(`Pos X: ${startCordX}\nPos Y: ${startCordY}`);
        }
    });
});

function getReferencedName(reference) {
    return referenceData[reference];
}

async function loadReferences() {
    const res = await fetch("./resources/references.json");
    referenceData = await res.json();
}