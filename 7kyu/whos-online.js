// ❓ DESCRIPTION:
// You have a group chat application, but who is online!?
// You want to show your users which of their friends are online and available to chat!
// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.
// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.
//
// ✅ SOLUTION 1:
const whosOnline = (friends) => {
    let obj = {};

    for (const friend of friends) {
        if (obj[friend.status] === undefined && friend.status === "offline") {
            obj[friend.status] = [];
        }
        if (friend.status === "online" && friend.lastActivity > 10) {
            if (obj["away"] === undefined) {
                obj["away"] = [];
            }
            obj.away.push(friend.username);
        } else if (friend.status === "offline") {
            obj.offline.push(friend.username);
        } else if (friend.status === "online") {
            if (obj[friend.status] === undefined) {
                obj.online = [];
            }
            obj.online.push(friend.username);
        }
    }
    return obj;
};

// ✅ SOLUTION 2:
const whosOnline = friends => friends.reduce((acc,{username, status, lastActivity}) => {
    const friendStatus = status === 'online' && lastActivity > 10 ? 'away' : status;
    acc[friendStatus] ? acc[friendStatus].push(username) : acc[friendStatus] = [username];
    return acc;
}, {})

// 📌 TESTCASE:
console.log(
    whosOnline([
        {
            username: "David",
            status: "online",
            lastActivity: 10,
        },
        {
            username: "Lucy",
            status: "offline",
            lastActivity: 22,
        },
        {
            username: "Bob",
            status: "online",
            lastActivity: 104,
        },
    ]),
); // {  online: ['David'],  offline: ['Lucy'],  away: ['Bob']}

console.log(
    whosOnline([
        {
            username: "Lucy",
            status: "offline",
            lastActivity: 22,
        },
        {
            username: "Bob",
            status: "online",
            lastActivity: 104,
        },
    ]),
); // {    offline: ['Lucy'],    away: ['Bob']  }
