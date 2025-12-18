/**
 * Esta clase guarda los datos de las distintas zonas que puede tener el mapa.
 */
export class Zone{
    constructor(zoneType, noz, zmis, zmxs, tbc){
        this.zoneType = zoneType;
        this.numberOfZones = noz;
        this.zoneMinSize = zmis;
        this.zoneMaxSize = zmxs;
        this.totalBoxesCount = tbc;
    }

    /**
     * Devuelve el número de casillas de las que dispondrá la zona a insertar.
     * @returns {int} - Número de casillas para la zona.
     */
    getZoneSize(){
        return Math.floor(Math.random() * (this.zoneMaxSize - this.zoneMinSize) + this.zoneMinSize);
    }

    /**
     * Este método devuelve el tipo de zona que es.
     * @returns {string} - Tipo de la zona.
     */
    getZoneType() {
        return this.zoneType;
    }

    /**
     * Este método devuelve el número de zonas que puede generar.
     * @returns {int} - Número de zonas que puede generar.
     */
    getNumberOfZones(){
        return this.numberOfZones;
    }

    /**
     * Este método devuelve el tamaño mínimo de las zonas.
     * @returns {int} - Tamaño mínimo de las zonas.
     */
    getZoneMinSize(){
        return this.zoneMinSize;
    }

    /**
     * Este método devuelve el tamaño máximo de las zonas.
     * @returns {int} - Tamaño máximo de las zonas.
     */
    getZoneMaxSize(){
        return this.zoneMaxSize;
    }

    /**
     * Este método devuelve la cantidad de casillas que una zona (NATURE, URBAN o COMMERTIAL) puede generar.
     * @returns {int} - Cantidad de casillas que puede generar.
     */
    getTotalBoxesCount(){
        return this.totalBoxesCount;
    }

    /**
     * Este método esteblece el valor del atributo . totalBoxesCoun
     * @param {int} tbc - Número que representará la cantidad de casillas disponibles para la zona. 
     */
    setTotalBoxesCount(tbc){
        this.totalBoxesCount = tbc;
    }
}