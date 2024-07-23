const { greetUser, add,reverse } = require('./script');

test('Greet user', () => {
    expect(greetUser('John')).toBe('Hello John');
});

test('Add two numbers', () => {
    expect(add(1, 2)).toBe(3);
});

test('Reverse string', ()=> {
    expect(reverse("Hello")).toBe('olleH')
})