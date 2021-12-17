const skills = [
    {id: 125223, skill: 'HTML', know: true},
    {id: 127904, skill: 'CSS', know: true},
    {id: 139608, skill: 'Express', know: false}
];
  
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
};
  
function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}
  
function getAll() {
    return skills;
}

function create(skill) {
  skill.id = Math.floor(Math.random() * 1000000);
  skill.know = false;
  skills.push(skill);
}

function deleteOne(id) {
  const idx = skills.findIndex(skill => skill.id ===parseInt(id));
  skills.splice(idx, 1);
}

function update(id, skill) {
  const idx = skills.findIndex(skill => skill.id === parseInt(id));
  skill.id = parseInt(id);
  skills.splice(idx, 1, skill);
}