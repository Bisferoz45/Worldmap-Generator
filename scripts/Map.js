export class Map{
    constructor(ms, moa){
        this.mapBoard = this.generateEmptyBoard(ms);
        this.mapAreaAvaible = moa;
        this.avaibleBoxes = this.getEmptyBoxes(this.mapBoard);
    }

    getEmptyBoxes(mb){
        let array = [];
        for(let r = 0; r < mb.length; r++){
            for(let c = 0; c < mb[r].length; c++){
                if(mb[r][c] == 0){
                    array.push(`${r}-${c}`);
                }
            }
        }
        return array;
    }

    generateEmptyBoard(ms){
        let array = [];
        for(let r = 0; r < ms; r++){
            array.push([])
            for(let c = 0; c < ms; c++){
                array[r][c] = 0;
            }
        }

        return array;
    }

    getMapBoard(){
        return this.mapBoard;
    }

    getMapAreaAviable(){
        return this.mapAreaAvaible;
    }

    getAviableBoxes(){
        return this.avaibleBoxes;
    }

    setAviableBoxes(ab){
        this.avaibleBoxes = ab;
    }
}