import { nameFoZones } from "../resources/NameOfZones.js";
import { Zone } from "./Zone.js";

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let zones = getZones();
        
    });

});

function getZones(){
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