import { Box } from "./Box.js";

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
     * Esta función revisa las casillas alrededor de las coordenadas indicada y devuelve un array de las casillas que se encuentren vacías.
     * @param {number} r - Número que indica la fila.
     * @param {number} c - Número que indica la columna.
     * @returns {array} - Devuelve un array con las casillas vacías.
     */
    getEmptyBoxesAround(r, c){
        let emptyBoxes = [];
        if(r == 0){
            if(c == 0){
                if(this.mapBoard[r][c++] == 0){emptyBoxes.push(`${r}-${c++}`);}
                if(this.mapBoard[r++][c] == 0){emptyBoxes.push(`${r++}-${c}`);}
                if(this.mapBoard[r++][c++] == 0){emptyBoxes.push(`${r++}-${c++}`);}
            
            }else if(c == this.mapBoard[r].length-1){
                if(this.mapBoard[r][c--] == 0){emptyBoxes.push(`${r}-${c--}`);}
                if(this.mapBoard[r++][c] == 0){emptyBoxes.push(`${r++}-${c}`);}
                if(this.mapBoard[r++][c--] == 0){emptyBoxes.push(`${r++}-${c--}`);}
            
            }else{
                if(this.mapBoard[r][c++] == 0){emptyBoxes.push(`${r}-${c++}`);}
                if(this.mapBoard[r++][c] == 0){emptyBoxes.push(`${r++}-${c}`);}
                if(this.mapBoard[r++][c++] == 0){emptyBoxes.push(`${r++}-${c++}`);}
                if(this.mapBoard[r][c--] == 0){emptyBoxes.push(`${r}-${c--}`);}
                if(this.mapBoard[r++][c--] == 0){emptyBoxes.push(`${r++}-${c--}`);}
            }
        
        }else if(r == this.mapBoard.length-1){
            if(c == 0){
                if(this.mapBoard[r][c++] == 0){emptyBoxes.push(`${r}-${c++}`);}
                if(this.mapBoard[r--][c] == 0){emptyBoxes.push(`${r--}-${c}`);}
                if(this.mapBoard[r--][c++] == 0){emptyBoxes.push(`${r--}-${c++}`);}
            
            }else if(c == this.mapBoard[r].length-1){
                if(this.mapBoard[r--][c--] == 0){emptyBoxes.push(`${r--}-${c--}`);}
                if(this.mapBoard[r][c--] == 0){emptyBoxes.push(`${r}-${c--}`);}
            
            }else{
                if(this.mapBoard[r][c++] == 0){emptyBoxes.push(`${r}-${c++}`);}
                if(this.mapBoard[r][c--] == 0){emptyBoxes.push(`${r}-${c--}`);}
                if(this.mapBoard[r--][c++] == 0){emptyBoxes.push(`${r--}-${c++}`);}
                if(this.mapBoard[r--][c--] == 0){emptyBoxes.push(`${r--}-${c--}`);}
                if(this.mapBoard[r--][c] == 0){emptyBoxes.push(`${r--}-${c}`);}
            }

        }else{
            if(c == 0){
                if(this.mapBoard[r][c++] == 0){emptyBoxes.push(`${r}-${c++}`);}
                if(this.mapBoard[r++][c] == 0){emptyBoxes.push(`${r++}-${c}`);}
                if(this.mapBoard[r++][c++] == 0){emptyBoxes.push(`${r++}-${c++}`);}
                if(this.mapBoard[r--][c] == 0){emptyBoxes.push(`${r--}-${c}`);}
                if(this.mapBoard[r--][c++] == 0){emptyBoxes.push(`${r++}-${c++}`);}

            }else if(c == this.mapBoard[r].length-1){
                if(this.mapBoard[r++][c] == 0){emptyBoxes.push(`${r++}-${c}`);}
                if(this.mapBoard[r][c--] == 0){emptyBoxes.push(`${r}-${c--}`);}
                if(this.mapBoard[r--][c] == 0){emptyBoxes.push(`${r--}-${c}`);}
                if(this.mapBoard[r--][c--] == 0){emptyBoxes.push(`${r--}-${c--}`);}
                if(this.mapBoard[r++][c--] == 0){emptyBoxes.push(`${r++}-${c++}`);}
                
            }else{
                if(this.mapBoard[r][c++] == 0){emptyBoxes.push(`${r}-${c++}`);}
                if(this.mapBoard[r++][c] == 0){emptyBoxes.push(`${r++}-${c}`);}
                if(this.mapBoard[r++][c++] == 0){emptyBoxes.push(`${r++}-${c++}`);}
                if(this.mapBoard[r][c--] == 0){emptyBoxes.push(`${r}-${c--}`);}
                if(this.mapBoard[r--][c] == 0){emptyBoxes.push(`${r--}-${c}`);}
                if(this.mapBoard[r--][c--] == 0){emptyBoxes.push(`${r--}-${c--}`);}
                if(this.mapBoard[r++][c--] == 0){emptyBoxes.push(`${r++}-${c++}`);}
                if(this.mapBoard[r--][c++] == 0){emptyBoxes.push(`${r++}-${c++}`);}
            }
        }
        return emptyBoxes;
    }

    /**
     * Esta función compara todas las casillas alrededor de las coordenadas indicadas y devuelve true si encuentra alguna casilla vacía.
     * @param {number} r - Número que indica la fila.
     * @param {number} c - Número que indica la columna.
     * @returns {boolean} - Devuelve true si encuentra alguna casilla libre alrededor de las coordenadas indicadas
     */
    haveEmptyBoxesAround(r, c){
        if(this.mapBoard[r][c++] == 0 || this.mapBoard[r++][c] == 0 || this.mapBoard[r++][c++] == 0 || this.mapBoard[r][c--] == 0 || this.mapBoard[r--][c] == 0 || this.mapBoard[r--][c--] == 0){
            return true;
        }else{
            return false;
        }
    }

    /**
     * Establece el valor indicado en las coordenadas del mapa indicadas.
     * @param {iny} r - Indicador de la fila. 
     * @param {int} c - Indicador de la columna.
     * @param {Box} v - Casilla a introducir.
     */
    setBoxIn(r, c, v){
        this.mapBoard[r][c] = v;
    }

    /**
     * Devuelve el valor de la casilla establecida.
     * @param {number} r - Número de fila.
     * @param {number} c - Número de columna.
     * @returns {any} - Si está vacía (Valor 0) devuelve 0, si no, devuelve objeto tipo Box.
     */
    getBoxValue(r, c){
        return this.mapBoard[r][c];
    }

    /**
     * Devuelve una coordenada libre aletoria dentro del array de coordenadas vacías (valor 0).
     * @returns {string} - Coordenada libre aleratoria (fila-columna).
     */
    getRandomCoord(){
        return this.avaibleBoxes[Math.floor(Math.random() * ((this.avaibleBoxes.length - 1) - 0) + 0)];
    }

    /**
     * Este método busca en un array de dos dimensiones las celdas vacías (valor 0) y devuelve un array con las coordenadas de cada una.
     * @param {array} mb - Un array de dos dimensiones que representa el mapa
     * @returns {array} - Un array de Strings que indican las coordenadas (fila-columna) de cada casilla vacía (valor 0).
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
     * Este método devuelve el atributo mapBoard.
     * @returns {array} - Devuelve un array bidimensional.
     */
    getMapBoard(){
        return this.mapBoard;
    }

    /**
     * Este método devuelve el atributo mapAreaAvaible.
     * @returns {int} - Devuelve un número. 
     */
    getMapAreaAviable(){
        return this.mapAreaAvaible;
    }

    /**
     * Este método devuelve el atributo avaibleBoxes.
     * @returns {array} - Devuelve un array.
     */
    getAviableBoxes(){
        return this.avaibleBoxes;
    }

    /**
     * Este método establece como valor del atributo avaibleBoxes un array de coordenadas.
     * @param {array} ab - Un array con las coordenadas de las casillas vacías (valor 0).
     */
    setAviableBoxes(ab){
        this.avaibleBoxes = ab;
    }
}