function skillsMember() {
  var member = {
    name: 'John Doe',
    age: 30,
    skills: ['JavaScript', 'React', 'Node'],
    getSkills: function() {
      return this.skills;
    }
  };

  return member;
}