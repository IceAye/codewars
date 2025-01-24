function formatDuration(seconds) {
    let time = [];

    let fullYear = 365 * 24 * 60 * 60;
    let year = Math.floor(seconds / fullYear);
    year > 1 ? time.push(year + " years") : year === 1 ? time.push("1 year") : "";

    let fullDay = 24 * 60 * 60;
    let days = Math.floor((seconds - (year * fullYear)) / (fullDay))
    days > 1 ? time.push(days + " days") : days === 1 ? time.push("1 day") : "";

    let fullHour = 60 * 60;
    let hours = Math.floor((seconds - (year * fullYear) - (days * fullDay)) / fullHour );
    hours > 1 ? time.push(hours + " hours") : hours === 1 ? time.push("1 hour") : "";

    let fullMinute = 60;
    let minutes = Math.floor((seconds - (year * fullYear) - (days * fullDay) - (hours * fullHour)) / fullMinute)
    minutes > 1 ? time.push(minutes + " minutes") : minutes === 1 ? time.push("1 minute") : "";

    let secondsRest = Math.floor(seconds - (year * fullYear) - (days * fullDay) - (hours * fullHour) - (minutes * fullMinute))
    secondsRest > 1 ? time.push(secondsRest + " seconds") : secondsRest === 1 ? time.push("1 second") : "";

    return time.length === 0 ? "now" : time.length === 1 ? time.join("") : time.length === 2 ? time.join(" and ") : time.reduce((total, curr, index) => {
        if (index === time.length - 2) {
            total += curr + " and "
        } else if (index === time.length - 1) {
            total += curr;
        } else {
            total += curr + ", "
        }
        return total;
    }, "");
}

console.log(formatDuration(1)); // "1 second"
console.log(formatDuration(62)); // "1 minute and 2 seconds"
console.log(formatDuration(120)); // "2 minutes"
console.log(formatDuration(3600)); // "1 hour"
console.log(formatDuration(3662)); // "1 hour, 1 minute and 2 seconds"
