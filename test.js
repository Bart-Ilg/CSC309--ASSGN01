const greet = require('./greet');

test('Requirement 1', () => 
{
   expect(greet('Bob')).toBe('Hello, Bob.');
});

test('Requirement 2', () => 
{
   expect(greet()).toBe('Hello, my friend.');
});

test('Requirement 3', () => 
{
   expect(greet('JERRY')).toBe('HELLO JERRY!');
});

test('Requirement 4', () => 
{
   const names = ['Jill', 'Jane'];
   expect(greet(names)).toBe('Hello, Jill and Jane.');
});

test('Requirement 5', () => 
{
   const names = ['Amy', 'Brian', 'Charlotte'];
   expect(greet(names)).toBe('Hello, Amy, Brian, and Charlotte.');
});

test('Requirement 6', () => 
{
   const names = ['Amy', 'BRIAN', 'Charlotte'];
   expect(greet(names)).toBe('Hello, Amy and Charlotte. AND HELLO BRIAN!');
});

test('Requirement 7', () => 
{
   const names = ['Bob', 'Charlie, Dianne'];
   expect(greet(names)).toBe('Hello, Bob, Charlie, and Dianne.');
});

test('Requirement 8', () => 
{
   const names = ['Bob', '"Charlie, Dianne"'];
   expect(greet(names)).toBe('Hello, Bob and Charlie, Dianne.');
});