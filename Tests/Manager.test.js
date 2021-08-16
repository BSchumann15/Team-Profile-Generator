// using the Manager constructor 
const Manager = require('../Lib/manager');

// creates the  manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Blake', 15, 'blakeschumann15@gmailcom', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Blake', 15, 'blakeschumann15@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 