export { generateMapBoard, getRandomCords }

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

function setZoneOnMapBoard(mapBoard, boxCant, type){
    
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