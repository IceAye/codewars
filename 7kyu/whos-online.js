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
