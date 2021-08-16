const Employee = require('../Lib/employer');

test('creates an employee object', () => {
    const employee = new Employee('Blake', 15, 'blakeschumann15@gmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employees name', () => {
    const employee = new Employee('Blake', 15, 'blakeschumann15@gmail.com');
    expect(employee.getName()).toEqual(expect.any(string));
});

test('get employees ID', () => {
    const employee = new Employee('Blake', 15, 'blakeschumann15@gmail.com');
    expect(employee.getID()).toEqual(expect.any(Number));
});

test('get employees email', () => {
    const employee = new Employee('Blake', 15, 'blakeschumann15@gmailcom');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('to get role of employee', () => {
    const employee = new Employee('Blake', 15, 'blakeschumann15@gmail.com');
    expect(employee.getRole()).toEqual('Employee');
});