const Park = function (name, entryPrice) {
    this.name = name;
    this.entryPrice = entryPrice;
    this.dinosaurCollection = [];

}

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurCollection.push(dinosaur)
}

Park.prototype.removeDinosaur = function (dinosaur) {
    for( let i = 0; i < this.dinosaurCollection.length; i++){ 
        if ( this.dinosaurCollection[i] === dinosaur) { 
            this.dinosaurCollection.splice(i, 1); 
            i--; //this allows the index position to stay correct when removing duplicates
        }
    }
}

module.exports = Park;