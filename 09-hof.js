const array = [
  {name: 'Iphone', price: 5000, quantity: 2},
  {name: 'MacBook Pro', price: 20000, quantity: 1},
  {name: 'Magic Mouse', price: 1000, quantity: 5},
];

const find = array.find((product) => {
  return product.price > 5000;
});

const findIndex = array.findIndex((product) => {
  return product.name === 'Magic Mouse';
});
console.log({findIndex});
console.log('Produto', array[findIndex]);