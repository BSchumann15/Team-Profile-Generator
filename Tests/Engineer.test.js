const Engineer = require('../Lib/engineer');

test('to see if object is created', () => {
    const engineer = new Engineer('Blake', 15, 'blakeschumann15@gmail.com', 'BSchumann15');
    expect(engineer.github()).toEqual(expect.any(String));
});

test('gets engineer github', () => {
    const engineer = new Engineer('Blake', 15, 'blakeschumann15@gmail.com', 'BSchumann15');
    expect(getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Blake', 15, 'blakeschumann15@gmail.com', 'BSchumann15');
    expect(engineer.getRole()).toEqual('Engineer');
});