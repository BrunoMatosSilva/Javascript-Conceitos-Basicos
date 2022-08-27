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
//console.log({findIndex});
//console.log('Produto', array[findIndex]);

const some = array.some((product) => product.price < 1000);
//console.log({some})

const every = array.every((product) => product.price > 500);
//console.log({every});

const map = array.map((product) => {
  return{
    ...product,
    subtotal: product.price * product.quantity,
  }
})
//console.log({map});

const filter = array.filter((product) =>  product.quantity > 1);
//console.log({filter});

const reduce = array.reduce((acc, product) => {
  return acc + (product.price * product.quantity);
}, 0);
console.log({reduce});