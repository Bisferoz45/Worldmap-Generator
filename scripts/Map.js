export class Map{
    constructor(size, totalMapOpupedArea){
        this.map = new Array(size);
        for(let row = 0; row < size; row++){
            this.map[row] = new Array(size);
        }
        this.totalMapOpupedArea = totalMapOpupedArea;
    }
    
    generateMap(initialCord, natureValues, urbanValues, commertialValues){
        while(this.totalMapOpupedArea > 0){
            this.setZone(Math.floor(Math.random() * 3 + 1), )
        }
    }

    setZone(type, cords, maxSize){
        switch(type){
                case 1:
                    set


                break;
                case 2:
                    
                break;
                case 3:
                    
                break;
                default:
                    console.log("default");
                break;
            }
    }

    getRoundedCord(cord){
        
    }

    getTotalMapArea(){
        return Math.pow(this.map.length, 2);
    }

    showMapValues(){
        for(let row = 0; row < this.map.length; row++){
            for(let col = 0; col < this.map[row].length; col++){
                console.log(`El valor de la columna '${col+1}' en la fila '${row+1}' es: ${this.map[row][col]}`);
            }
        }
    }


}