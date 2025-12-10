import { tags } from "../resources/TagReferences.js";
import { generateMapBoard, getRandomCords, setZoneOnMapBoard } from "./map.js";

document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("map-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const mapSize = document.querySelector("input[name=G-MpSz]").value;

                                                                               //↓ CANTIDAD DE ZONAS DE LAS QUE DISPONDRÁ ↓\\
        const natureData = [Math.floor(Math.random() * (document.querySelector("input[name=N-MnZ]").value - document.querySelector("input[name=N-MxZ]").value) + document.querySelector("input[name=N-MxZ]").value),
                            document.querySelector("input[name=N-ZMS]").value, //NATURE - ZONE MAX SIZE
                            document.querySelector("input[name=N-TMS]").value] //NATURE - TOTAL MAX BOXES

                                                                              //↓ CANTIDAD DE ZONAS DE LAS QUE DISPONDRÁ ↓\\
        const urbanData = [Math.floor(Math.random() * (document.querySelector("input[name=U-MnZ]").value - document.querySelector("input[name=U-MxZ]").value) + document.querySelector("input[name=U-MxZ]").value),
                           document.querySelector("input[name=U-ZMS]").value, //URBAN - ZONE MAX SIZE
                           document.querySelector("input[name=U-TMS]").value] //URBAN - TOTAL MAX BOXES

                                                                                   //↓ CANTIDAD DE ZONAS DE LAS QUE DISPONDRÁ ↓\\
        const commertialData = [Math.floor(Math.random() * (document.querySelector("input[name=U-MnZ]").value - document.querySelector("input[name=U-MxZ]").value) + document.querySelector("input[name=U-MxZ]").value),
                                document.querySelector("input[name=U-ZMS]").value, //COMMERTIAL - ZONE MAX SIZE
                                document.querySelector("input[name=U-TMS]").value] //COMMERTIAL - TOTAL MAX BOXES
        
        let mapBoard = generateMapBoard(mapSize);
        let cords = getRandomCords(mapSize);
        let type = getRandomType();
        
        switch(type){
            case 1:
                setZoneOnMapBoard(mapBoard, cords, getZoneSize(natureData), type);
            break;
            
            case 2:
                setZoneOnMapBoard(mapBoard, cords, getZoneSize(urbanData), type);
            break;
            
            case 3:
                setZoneOnMapBoard(mapBoard, cords, getZoneSize(commertialData), type);
            break;
            
            default:
                console.log(`ERROR: El tipo '${type} no es un valor aceptado'`);
            break;
        }
        
        console.log(mapBoard);
    });
});

function getZoneSize(data){ //Devuelve la cantidad de casillas con las que contara una zona
    return Math.floor(Math.random() * (data[1] - 1) + 1);
}

function getRandomType(){
    return Math.floor(Math.random() * (3 - 1) + 1);
}