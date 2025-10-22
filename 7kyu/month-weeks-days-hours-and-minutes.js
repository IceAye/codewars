function displayValue(value) {
    const MINUTES_IN_HOUR = 60;
    const MINUTES_IN_DAY = 24 * MINUTES_IN_HOUR;
    const MINUTES_IN_WEEK = 7 * MINUTES_IN_DAY;
    const MINUTES_IN_MONTH = 28 * MINUTES_IN_DAY;

    const units = [
        { name: 'month', value: MINUTES_IN_MONTH },
        { name: 'week', value: MINUTES_IN_WEEK },
        { name: 'day', value: MINUTES_IN_DAY },
        { name: 'hour', value: MINUTES_IN_HOUR },
        { name: 'minute', value: 1 }
    ];

    const result = [];

    for (const unit of units) {
        const count = Math.floor(value / unit.value);
        if (count > 0) {
            result.push(`${count} ${unit.name}${count > 1 ? 's' : ''}`);
            value %= unit.value;
        }
    }

    return result.join(' ');
}
