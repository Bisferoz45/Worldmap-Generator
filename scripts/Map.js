export { generateMapBoard, getRandomCords, setZoneOnMapBoard }

function generateMapBoard(mapSize){
    let mapBoard = []
    for(let r = 0; r < mapSize; r++){
        mapBoard[r] = [];
        for(let c = 0; c < mapSize; c++){
            mapBoard[r][c] = 0;
        }
    }
    return mapBoard;
}

function getRandomCords(mapSize){
    let row = Math.floor(Math.random() * (mapSize - 0) + 0);
    let col = Math.floor(Math.random() * (mapSize - 0) + 0);
    return [row, col];
}

function setZoneOnMapBoard(mapBoard, cords, boxCant, type){
    let ocupedBoxes = [`${cords[0]}-${cords[1]}`] //FILA - COLUMNA
    mapBoard[cords[0]][cords[1]] = type;
    boxCant--;
    while(boxCant > 0){
        let unocupedBoxes = getFreeBoxesAround(mapBoard, ocupedBoxes);
        if(unocupedBoxes.length > 0){
            let randomIndex = Math.floor(Math.random() * ((unocupedBoxes.length - 1) - 0) + 0);
            let boxCords = unocupedBoxes[randomIndex].split("-")
            let r = boxCords[0];
            let c = boxCords[1];
            mapBoard[r][c] = type;
            ocupedBoxes.push(`${r}-${c}`);
            boxCant--;
        }else{
            boxCant = 0;
        }
    }
}

function getFreeBoxesAround(mapBoard, ocupedBoxes){
    let array = []
    ocupedBoxes.forEach((element) => {
        let cords = element.split("-");
        let r = Number(cords[0]);
        let c = Number(cords[1]);

        if(r < mapBoard.length-1 && c < mapBoard[0].length-1 && r > 0 && c > 0){
            array.push(getCordsOfDirecction(mapBoard, [r, c], "RIGHT"));
            array.push(getCordsOfDirecction(mapBoard, [r, c], "RIGHT-DOWN"));
            array.push(getCordsOfDirecction(mapBoard, [r, c], "DOWN"));
            array.push(getCordsOfDirecction(mapBoard, [r, c], "LEFT-DOWN"));
            array.push(getCordsOfDirecction(mapBoard, [r, c], "LEFT"));
            array.push(getCordsOfDirecction(mapBoard, [r, c], "LEFT-UP"));
            array.push(getCordsOfDirecction(mapBoard, [r, c], "UP"));
            array.push(getCordsOfDirecction(mapBoard, [r, c], "RIGHT-UP"));
        }else{
            if(r >= mapBoard.length-1){
                if(c >= mapBoard[0].length-1){
                    array.push(getCordsOfDirecction(mapBoard, [r, c], "UP"));
                    array.push(getCordsOfDirecction(mapBoard, [r, c], "LEFT-UP"));
                    array.push(getCordsOfDirecction(mapBoard, [r, c], "LEFT"));
                }else{
                    array.push(getCordsOfDirecction(mapBoard, [r, c], "UP"));
                    array.push(getCordsOfDirecction(mapBoard, [r, c], "RIGHT-UP"));
                    array.push(getCordsOfDirecction(mapBoard, [r, c], "RIGHT"));
                }
            }else{
                if(c >= mapBoard[0].length-1){
                    array.push(getCordsOfDirecction(mapBoard, [r, c], "DOWN"));
                    array.push(getCordsOfDirecction(mapBoard, [r, c], "LEFT-DOWN"));
                    array.push(getCordsOfDirecction(mapBoard, [r, c], "LEFT"));
                }else{
                    array.push(getCordsOfDirecction(mapBoard, [r, c], "DOWN"));
                    array.push(getCordsOfDirecction(mapBoard, [r, c], "RIGHT-DOWN"));
                    array.push(getCordsOfDirecction(mapBoard, [r, c], "RIGHT"));
                }
            }
        }
    });

    return array;
}

function getCordsOfDirecction(mapBoard, cords, direction){
    switch(direction){
        case "RIGHT":
            if(mapBoard[cords[0]][cords[1] + 1] == 0){
                return `${cords[0]}-${cords[1] + 1}`;
            }else{
                return 0;
            }
        break;
        
        case "RIGHT-DOWN":
            if(mapBoard[cords[0] + 1][cords[1] + 1]){
                return `${cords[0] + 1}-${cords[1] + 1}`;
            }
        break;
        
        case "DOWN":
            return `${cords[0] + 1}-${cords[1]}`;
        break;
        
        case "LEFT-DOWN":
            return `${cords[0] + 1}-${cords[1] - 1}`;
        break;
        
        case "LEFT":
            return `${cords[0]}-${cords[1] - 1}`;
        break;
        
        case "LEFT-UP":
            return `${cords[0] - 1}-${cords[1] - 1}`;
        break;
        
        case "UP":
            return `${cords[0] - 1}-${cords[1]}`;
        break;
        
        case "RIGHT-UP":
            return `${cords[0] - 1}-${cords[1] + 1}`;
        break;
        default:
            return "INCORRECT VALUE OF 'DIRECTION'"
        break;
    }
    
}


function getDirectionExpand(){
    switch(Math.floor(Math.random() * (8 - 1) + 1)){
        case 1:
            return "NORTH";
        break;
        case 2:
            return "NORTH-EAST";
        break;
        case 3:
            return "EAST";
        break;
        case 4:
            return "SOUTH-EAST";
        break;
        case 5:
            return "SOUTH";
        break;
        case 6:
            return "SOUTH-WEST";
        break;
        case 7:
            return "WEST";
        break;
        case 8:
            return "NORTH-WEST";
        break;
        default:
            return "ERROR: Valor de dirección incorrecto."
        break;
    }
}