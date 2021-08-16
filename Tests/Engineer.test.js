// using the Engineer constructor 
const Engineer = require('../Lib/engineer');

// creating the engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Blake', 15, 'blakeschumann15@gmail.com', 'BSchumann15');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github username from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Blake', 15, 'blakeschumann15@gmail.com', 'BSchumann15');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Blake', 15, 'blakeschumann15@gmail.com', 'BSchumann15');

    expect(engineer.getRole()).toEqual("Engineer");
});

