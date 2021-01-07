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

Park.prototype.mostPopularDinosaur = function () {
    let mostPopularDinosaur = false;
    if (this.dinosaurCollection.length === 1){
        mostPopularDinosaur = this.dinosaurCollection[0];
    } else if (this.dinosaurCollection.length > 1) {
        mostPopularDinosaur = this.dinosaurCollection[0];
        for( let i = 1; i < this.dinosaurCollection.length; i++){ 
            if ( this.dinosaurCollection[i].guestsAttractedPerDay > mostPopularDinosaur.guestsAttractedPerDay) { 
                mostPopularDinosaur = this.dinosaurCollection[i];
            }
        }
    }
    else {
        return mostPopularDinosaur
    }
    return mostPopularDinosaur
    
}

Park.prototype.findAllSpecies = function (species) {
    let matchingSpecies = [];
        for( dinosaur of this.dinosaurCollection){ 
            if ( dinosaur.species === species) { 
                matchingSpecies.push(dinosaur);
            }
        }
    return matchingSpecies;
}

Park.prototype.totalVisitsPerDay = function () {
    let total = 0;
        for( dinosaur of this.dinosaurCollection){ 
            total += dinosaur.guestsAttractedPerDay
        }
    return total;
}

module.exports = Park;