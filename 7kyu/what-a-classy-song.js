class Song {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
        this.listeners = new Set();
    }

    howMany(array) {
        this.count = 0;
        for (const person of array) {
            if (!this.listeners.has(person.toLowerCase())) {
                this.count++;
                this.listeners.add(person.toLowerCase());
            }
        }
        return this.count;
    }
}

let mountMoose = new Song("Mount Moose", "The Snazzy Moose");

console.log(mountMoose.title, "Mount Moose");
console.log(mountMoose.artist, "The Snazzy Moose");
console.log(mountMoose.howMany(["John", "Fred", "Bob", "Carl", "RyAn"]), 5);
console.log(mountMoose.howMany(["JoHn", "Luke", "AmAndA"]), 2);
console.log(mountMoose.howMany(["Amanda", "CalEb", "CarL", "Furgus"]), 2);
console.log(mountMoose.howMany(["JOHN", "FRED", "BOB", "CARL", "RYAN", "KATE"]), 1,);
console.log(mountMoose.howMany(["Jack", "jacK"]), 1);
