const user = {
  firstName: 'Bruno',
  lasName: 'Silva',
  age: 30,
  intagram: '@BMSDev',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
};

const {firstName, lasName, age, skills} = user;
const [first, secondary, tertiary, quaternary] = skills;
console.log(firstName, lasName, age, tertiary);