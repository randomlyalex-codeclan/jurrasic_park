const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur;
  beforeEach(function () {
    park = new Park("Jurrasic World", 100);
    trex = new Dinosaur('t-rex', 'carnivore', 50);
    stegosaurus = new Dinosaur('stegosaurus', 'herbivorous', 20);
    diplodocus = new Dinosaur('diplodocus', 'herbivorous', 30);
    triceratops = new Dinosaur('triceratops', 'herbivorous', 40);
    park.dinosaurCollection = [trex, stegosaurus, diplodocus];
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, "Jurrasic World");
  });

  it('should have a ticket price', function() {
    const actual = park.entryPrice;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function() {
    const actual =  park.dinosaurCollection.length > 0;
    assert.strictEqual (actual, true);
  });

  it('should be able to add a dinosaur to its collection', function() {
    const collectionBefore =  park.dinosaurCollection.length;
    park.addDinosaur(triceratops);
    const collectionAfter = park.dinosaurCollection.length;
    assert.strictEqual (collectionBefore < collectionAfter, true);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    const collectionBefore =  park.dinosaurCollection.length;
    park.removeDinosaur(diplodocus);
    const collectionAfter = park.dinosaurCollection.length;
    assert.strictEqual (collectionBefore > collectionAfter, true);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    const actual = park.mostPopularDinosaur();
    assert.strictEqual (actual, trex);
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    trex2 = new Dinosaur('t-rex', 'carnivore', 45);
    park.addDinosaur(trex2);
    const actual = park.findAllSpecies("t-rex");
    assert.strictEqual (actual.length, 2);
  });

  it('should be able to calculate the total number of visitors per day', function() {
    const actual = park.totalVisitsPerDay();
    assert.strictEqual (actual, 100);
  });

  it('should be able to calculate the total number of visitors per year', function() {
    const actual = park.totalVisitsPerYear();
    assert.strictEqual (actual, 36500);
  });

  it('should be able to calculate total revenue for one year', function() {
    const actual = park.totalRevenuePerYear();
    assert.strictEqual (actual, 3650000);
  });

});
