/**
 * Clase de tipo Map.
 * Esta clase está pensada para manejar un array 2D que funciona como mapa por casillas.
 */
export class Map{
    constructor(ms, moa){
        this.mapBoard = this.generateEmptyBoard(ms);
        this.mapAreaAvaible = moa;
        this.avaibleBoxes = this.getEmptyBoxes(this.mapBoard);
    }

    /**
     * Esta función busca en un array de dos dimensiones las celdas vacías (valor 0) y devuelve un array con las coordenadas de cada una.
     * @param {array} mb - Un array de dos dimensiones que representa el mapa
     * @returns {array} - Un array de Strings que indican las coordenadas (fila-columna) de cada fila vacía (valor 0).
     */
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

    /**
     * 
     * @param {int} ms - Valor que indica el tamaño del array vidimensional (alto y ancho). 
     * @returns {array} - Devuelve un array bidimensional cuyas casillas tienen valor 0.
     */
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

    /**
     * Esta función devuelve el atributo mapBoard.
     * @returns {array} - Devuelve un array bidimensional.
     */
    getMapBoard(){
        return this.mapBoard;
    }

    /**
     * Esta función devuelve el atributo mapAreaAvaible.
     * @returns {int} - Devuelve un número. 
     */
    getMapAreaAviable(){
        return this.mapAreaAvaible;
    }

    /**
     * Esta función devuelve el atributo avaibleBoxes.
     * @returns {array} - Devuelve un array.
     */
    getAviableBoxes(){
        return this.avaibleBoxes;
    }

    /**
     * Esta función establece como valor del atributo avaibleBoxes un array de coordenadas.
     * @param {array} ab - Un array con las coordenadas de las casillas vacías (valor 0).
     */
    setAviableBoxes(ab){
        this.avaibleBoxes = ab;
    }
}