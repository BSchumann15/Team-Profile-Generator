// using the Intern constructor 
const Intern = require('../Lib/intern');

// creates the intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Blake', 15, 'nicole.elisaw@gmail.com', 'Immanuel');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets the school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Blake', 15, 'blakeschumann15@gmail.com', 'Immanuel');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Blake', 15, 'blakeschumann15@gmail.com', 'Immanuel');

    expect(intern.getRole()).toEqual("Intern");
}); 