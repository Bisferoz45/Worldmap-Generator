/**
 * Archivo principal de control y manejo de los datos del formulario y de las clases
 * @author Gabriel Cárdenas
 * @version 1.0
 * @since 2025-12-18
 */


import { nameFoZones } from "../resources/NameOfZones.js";
import { Map } from "./Map.js";
import { Zone } from "./Zone.js";
import { Box } from "./Box.js";

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        //ASIGNACIÓN DE VALORES
        let map = generateEmptyMap();
        let zones = generateZones();

        //COMPROBACIÓN DE ZONAS
        while(zones.length > 0){
            let cords = map.getRandomCoord();
            const zone = getRandomZone(zones);
            let zoneID = 1;
            
            if(zone.getTotalBoxesCount() != 0 || zone.getTotalBoxesCount() < 0){
                let boxesPerZone = zone.getZoneSize();
                let occupiedBoxes = [];
                while(boxesPerZone > 0){
                    let cord = cords.split("-");
                    cord[0] = Number(cord[0]);
                    cord[1] = Number(cord[1]);
                    console.log(cord);
                    if(map.getBoxValue(cord[0], cord[1]) == 0){
                        map.setBoxIn(cord[0], cord[1], new Box(zone.getZoneType, zoneID));
                        occupiedBoxes.push(cords);
                        map.getEmptyBoxes(map.avaibleBoxes);
                        cords = moveToRandomDirection(cords);
                        boxesPerZone--;
                    }else{
                        if(map.haveEmptyBoxesAround(cord[0], cord[1])){
                            const emptyBoxes = map.getEmptyBoxesAround(cord[0], cord[1]);
                            cords = emptyBoxes[Math.floor(Math.random() * (emptyBoxes.length - 0) + 0)];
                        }else{
                            let emptyBoxes = [];
                            occupiedBoxes.forEach((c) => {
                                let crd = c.split("-");
                                if(map.getBoxValue(crd[0], crd[1]).getZoneID() == zoneID){
                                    if(map.haveEmptyBoxesAround(crd[0], crd[1])){
                                        let tmp = map.getEmptyBoxesAround(crd[0], crd[1]);
                                        tmp.forEach((element) => {
                                            emptyBoxes.push(element);
                                        });
                                    }
                                }
                            });

                            if(emptyBoxes.length > 0){
                                cords = emptyBoxes[Math.floor(Math.random() * (emptyBoxes.length - 0) + 0)];
                            }else{
                                boxesPerZone = 0;
                            }
                        }
                    }

                }
                
            }else{
                for(let i = 0; i < zones.length; i++){
                    if(zones[i].getZoneType() == zone.getZoneType()){
                        zones.splice(i, 1);
                    }
                }
            }
        }

        console.log(map.mapBoard);
    });

});

/**
 * Función encargada de seleccionar una dirección aleatoria y modificar las coordenadas en función de esa dirección.
 * @param {string} cords - Coordenada a cambiar (fila-columna). 
 * @returns {string} - Devuelve las nuevas coordenadas (fila-columna).
 */
function moveToRandomDirection(cords){
    let cord = cords.split("-");
    const directions = ["UP", "UP-RIGHT", "RIGHT", "DOWN-RIGHT", "DOWN", "DOWN-LEFT", "LEFT", "LEFT-UP"];
    switch(directions[Math.floor(Math.random() * (directions.length - 0) + 0)]){
        case "UP":
            cord[0]++;
        break;
        case "UP-RIGHT":
            cord[0]++;
            cord[1]++;
        break;
        case "RIGHT":
            cord[1]++;
        break;
        case "DOWN-RIGHT":
            cord[0]--;
            cord[1]++;
        break;
        case "DOWN":
            cord[0]--;
        break;
        case "DOWN-LEFT":
            cord[0]--;
            cord[1]--;
        break;
        case "LEFT":
            cord[1]--;
        break;
        case "UP-LEFT":
            cord[0]++;
            cord[1]--;
        break;
    }

    return `${cord[0]}-${cord[0]}`;
}

/**
 * Función que devuelve un objeto zona aleatorio de un array de objetos Zona.
 * @param {array} zones - Un array de objetos de tipo Zone.
 * @returns {Zone} - Un objeto del tipo Zone.
 */
function getRandomZone(zones){
    return zones[Math.floor(Math.random() * ((zones.length) - 0) + 0)];
}


/**
 * Función que devuelve un objeto de tipo Map.
 * @returns {Map} - Un objeto de tipo Map co un array bidimensional de valor 0 en cada celda.
 */
function generateEmptyMap(){
    const size = document.querySelector("input[name=MS]").value;
    const occupiedArea = document.querySelector("input[name=TOA]").value;

    return new Map(size, occupiedArea);
}


/**
 * Función que devuelve un array de objetso del tipo Zone,
 * cada objeto pertenece a un tipo de zona distinto siguiendo el archivo NameOfZones.js.
 * @returns {array} - Devuelve un array de objetos Zone siguiendo los tipos de NameOfZones.js.
 */
function generateZones(){
    let zonesArray = [];
    for(let i = 0; i < nameFoZones.length; i++){
        let data = [];
        for(let ti = 0; ti < nameFoZones[i].data_tags.length; ti++){
            console.log()
            data.push(document.querySelector(`input[name=${nameFoZones[i].data_tags[ti]}]`).value);
        }
        const type = nameFoZones[i].name;
        const numberOfZones = Math.floor(Math.random() * (Number(data[1]) - Number(data[0]) + 1) + Number(data[0]));
        const zoneMinSize = Math.floor(data[1] - (data[1] * 40 / 100));
        const zoneMaxSize = Number(data[2]);
        const totalMaxSize = Number(data[3]);
        zonesArray.push(new Zone(type, numberOfZones, zoneMinSize, zoneMaxSize, totalMaxSize));
    }
    return zonesArray;
}