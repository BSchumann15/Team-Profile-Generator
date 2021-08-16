const Intern = require('../Lib/intern');

test('to see if object is created', () => {
    const intern = new Intern('Blake', 15, 'blakeschumann15@gmail.com', 'Immaunel');
    expect(intern.school()).toEqual(expect.any(String));
});

test('gets engineer github', () => {
    const intern = new Intern('Blake', 15, 'blakeschumann15@gmail.com', 'Immanuel');
    expect(getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Blake', 15, 'blakeschumann15@gmail.com', 'Immanuel');
    expect(intern.getRole()).toEqual('Intern');
});