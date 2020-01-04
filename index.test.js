const addDays = require('./index');

describe('addDays', () => {
    it('requires a valid date', () => {
        expect(() => addDays(null, 5)).toThrow();
    });

    it('requires a valid number of days', () => {
        expect(() => addDays(new Date(1985, 9, 25), null)).toThrow();
    });

    it('does not mutate the original date', () => {
        const date = new Date(Date.UTC(1985, 9, 25, 0, 0, 0));
        addDays(date, 6);
        expect(date.toISOString()).toBe('1985-10-25T00:00:00.000Z');
    });

    it('allows negative numbers', () => {
        const date = new Date(Date.UTC(1985, 9, 25, 0, 0, 0));
        const result = addDays(date, -1);
        expect(result.toISOString()).toBe('1985-10-24T00:00:00.000Z');
    });

    it('adds 0 days', () => {
        const date = new Date(Date.UTC(1985, 9, 25, 0, 0, 0));
        const result = addDays(date, 0);
        expect(result.toISOString()).toBe('1985-10-25T00:00:00.000Z');
    });

    it('adds 1 day', () => {
        const date = new Date(Date.UTC(1985, 9, 25, 0, 0, 0));
        const result = addDays(date, 1);
        expect(result.toISOString()).toBe('1985-10-26T00:00:00.000Z');
    });

    it('adds 2 days', () => {
        const date = new Date(Date.UTC(1985, 9, 25, 0, 0, 0));
        const result = addDays(date, 2);
        expect(result.toISOString()).toBe('1985-10-27T00:00:00.000Z');
    });

    it('adds 30 days', () => {
        const date = new Date(Date.UTC(1985, 9, 25, 0, 0, 0));
        const result = addDays(date, 30);
        expect(result.toISOString()).toBe('1985-11-24T00:00:00.000Z');
    });
});
