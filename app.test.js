const { getWelcomeMessage } = require('./app.js');

describe('Awarehouse App Tests', () => {

    test('getWelcomeMessage should return the correct welcome message', () => {
        const expectedMessage = "Welcome to Awarehouse!";
        const actualMessage = getWelcomeMessage();
        expect(actualMessage).toBe(expectedMessage);
    });

    test('getWelcomeMessage should return a string', () => {
        const result = getWelcomeMessage();
        expect(typeof result).toBe('string');
    });

    test('getWelcomeMessage should not be empty', () => {
        const result = getWelcomeMessage();
        expect(result.length).toBeGreaterThan(0);
    });

    test('getWelcomeMessage should contain "Awarehouse"', () => {
        const result = getWelcomeMessage();
        expect(result).toContain('Awarehouse');
    });
});