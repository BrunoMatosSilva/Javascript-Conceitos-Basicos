const user = {
  firstName: 'Bruno',
  lasName: 'Silva',
  age: 30,
  intagram: '@BMSDev',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
  active: false,
};

const updateUser = {
  ...user,
  skills: [...user.skills, 'Maneger'], 
  active: true,
};

console.log(updateUser);