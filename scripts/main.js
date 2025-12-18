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
            
        }
    });

});
/**
 * Función que devuelve un objeto zona aleatorio de un array de objetos Zona.
 * @param {array} zones - Un array de objetos de tipo Zone.
 * @returns {Zone} - Un objeto del tipo Zone.
 */

function getRandomZone(zones){
    return zones[Math.random() * ((zones.length - 1) - 0) + 0];
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