const user = {
  firstName: 'Bruno',
  lasName: 'Silva',
  age: 30,
  intagram: '@BMSDev',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
};

const {firstName, skills, ...restoUser} = user;
const [primary, ...restoSkill] = skills;
console.log(restoSkill);