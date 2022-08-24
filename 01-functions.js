function minhaFunction() {
  this.name = 'Bruno';
}

console.log(new minhaFunction())

const minhaArrowFunction = () => {
  this.name = 'Bruno';
};
minhaArrowFunction();

console.log(this);