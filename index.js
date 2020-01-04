const addDays = (date, days) => {
    if (!date) throw new Error('Must provide a date.');
    
    if (days === null || days === undefined) throw new Error('Must provide number of days.');
    if (typeof days !== 'number') throw new Error('Number of days must be a number type.');
    if (Number.isNaN(days)) throw new Error('Number of days cannot be NaN.');

    const milliseconds = days * 24 * 60 * 60 * 1000;
    const result = new Date(date.valueOf() + milliseconds);
    return result;
};

module.exports = addDays;
