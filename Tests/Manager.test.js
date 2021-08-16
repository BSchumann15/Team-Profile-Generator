const Manager = require('../Lib/manager');

test('to see if object is created', () => {
    const manager = new Manager('Blake', 15, 'blakeschumann15@gmail.com', '3');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Blake', 15, 'blakeschumann15@gmail.com', '3');
    expect(manager.getRole()).toEqual('Manager');
});