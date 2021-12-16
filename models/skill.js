const skills = [
    {id: 125223, skill: 'HTML', know: true},
    {id: 127904, skill: 'CSS', know: true},
    {id: 139608, skill: 'Express', know: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
  
  function getAll() {
    return skills;
  }