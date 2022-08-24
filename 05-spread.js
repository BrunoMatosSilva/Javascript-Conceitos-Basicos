const user = {
  firstName: 'Bruno',
  lasName: 'Silva',
  age: 30,
  intagram: '@BMSDev',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
  active: false,
};

const updateUser = {...user, active: true};

console.log(updateUser);