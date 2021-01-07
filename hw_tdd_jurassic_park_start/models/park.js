const Park = function (name, entryPrice) {
    this.name = name;
    this.entryPrice = entryPrice;
    this.dinosaurCollection = [];

  }
  
Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurCollection.push(dinosaur)
}

  module.exports = Park;