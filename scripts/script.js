import { tags } from "../resources/TagReferences.js";
import { generateMapBoard, getRandomCords } from "./map.js";

document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("map-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const mapSize = document.querySelector("input[name=G-MpSz]").value;

                                                                               //↓ CANTIDAD DE ZONAS DE LAS QUE DISPONDRÁ ↓\\
        const natureData = [Math.floor(Math.random() * (document.querySelector("input[name=N-MnZ]").value - document.querySelector("input[name=N-MxZ]").value) + document.querySelector("input[name=N-MxZ]").value),
                            document.querySelector("input[name=N-ZMS]").value, //NATURE - ZONE MAX SIZE
                            document.querySelector("input[name=N-TMS]").value] //NATURE - TOTAL MAX SIZE

                                                                              //↓ CANTIDAD DE ZONAS DE LAS QUE DISPONDRÁ ↓\\
        const urbanData = [Math.floor(Math.random() * (document.querySelector("input[name=U-MnZ]").value - document.querySelector("input[name=U-MxZ]").value) + document.querySelector("input[name=U-MxZ]").value),
                           document.querySelector("input[name=U-ZMS]").value, //URBAN - ZONE MAX SIZE
                           document.querySelector("input[name=U-TMS]").value] //URBAN - TOTAL MAX SIZE

                                                                                   //↓ CANTIDAD DE ZONAS DE LAS QUE DISPONDRÁ ↓\\
        const commertialData = [Math.floor(Math.random() * (document.querySelector("input[name=U-MnZ]").value - document.querySelector("input[name=U-MxZ]").value) + document.querySelector("input[name=U-MxZ]").value),
                                document.querySelector("input[name=U-ZMS]").value, //COMMERTIAL - ZONE MAX SIZE
                                document.querySelector("input[name=U-TMS]").value] //COMMERTIAL - TOTAL MAX SIZE
        
        let mapBoard = generateMapBoard(mapSize);
        let cords = getRandomCords(mapSize);
        mapBoard[cords[0]][cords[1]] = getRandomType();
        console.log(mapBoard);
        
    });
});

function getZoneSize(){} //Devuelve la cantidad de casillas con las que contara una zona

function getRandomType(){
    return Math.floor(Math.random() * (3 - 1) + 1);
}