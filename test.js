let materialPrice = {
  'wood': 2000,
  'stone': 505,
  'brick': 401
};

let house = {
  calculateSquare: function () {
  return this.rooms * this.coefficient * this.rooms;
},
  rooms: 100000,
  floors: 500000,
  material: 'red',
  coefficient: 10.5,
  calculatePrice: function () {
  return this.calculateSquare() * materialPrice[this.material];
}
};

console.log(house.calculatePrice())

