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
                    map.setBoxIn(cord[0], cord[1], new Box(zone.getZoneType, zoneID));
                    occupiedBoxes.push(cord);
                    map.getEmptyBoxes(map.avaibleBoxes);
                    moveToRandomDirection(cords)
                    if(map.)

                }
                
            }else{
                for(let i = 0; i < zones.length; i++){
                    if(zones[i].getZoneType() == zone.getZoneType()){
                        zones.splice(i, 1);
                    }
                }
            }
        }
    });

});

function moveToRandomDirection(cords){
    const directions = ["UP", "UP-RIGHT", "RIGHT", "DOWN-RIGHT", "DOWN", "DOWN-LEFT", "LEFT", "LEFT-UP"];
    switch(directions[Math.floor(Math.random() * (directions.length - 0) + 0)]){
        case "UP":
            cords[0]++;
        break;
        case "UP-RIGHT":
            cords[0]++;
            cords[1]++;
        break;
        case "RIGHT":
            cords[1]++;
        break;
        case "DOWN-RIGHT":
            cords[0]--;
            cords[1]++;
        break;
        case "DOWN":
            cords[0]--;
        break;
        case "DOWN-LEFT":
            cords[0]--;
            cords[1]--;
        break;
        case "LEFT":
            cords[1]--;
        break;
        case "UP-LEFT":
            cords[0]++;
            cords[1]--;
        break;
    }
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