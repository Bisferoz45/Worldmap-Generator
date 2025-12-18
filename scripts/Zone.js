export class Zone{
    constructor(zoneType, noz, zmis, zmxs, tbc){
        this.zoneType = zoneType;
        this.numberOfZones = noz;
        this.zoneMinSize = zmis;
        this.zoneMaxSize = zmxs;
        this.totalBoxesCount = tbc;
    }

    

    getZoneType() {
        return this.zoneType;
    }

    getNumberOfZones(){
        return this.numberOfZones;
    }

    getZoneMinSize(){
        return this.zoneMinSize;
    }

    getZoneMaxSize(){
        return this.zoneMaxSize;
    }

    getTotalBoxesCount(){
        return this.totalBoxesCount;
    }

    setNumberOfZones(noz){
        this.numberOfZones = noz;
    }

    setZoneMinSize(zmis){
        this.zoneMinSize = zmis;
    }

    setZoneMaxSize(zmxs){
        this.zoneMaxSize = zmxs;
    }

    setTotalBoxesCount(tbc){
        this.totalBoxesCount = tbc;
    }
}