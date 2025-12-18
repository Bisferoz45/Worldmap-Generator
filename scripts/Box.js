/**
 * Clase que representa las casillas del mapa
 */
export class Box{
    constructor(type, id){
        this.boxZoneType = type;
        this.zoneID = id;
    }

    /**
     * Devuelve el tipo de zona de la casilla.
     * @returns {string} - Tipo de zona de la casilla.
     */
    getBoxZoneType(){
        return this.boxZoneType;
    }

    /**
     * Devuelve la id de la zona generada en ese momento al que pertenece la casilla.
     * @returns {string} - ID de la casilla.
     */
    getZoneID(){
        return this.zoneID;
    }
}