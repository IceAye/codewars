function itinerary(travel) {
    const result = [travel[0].in, travel[0].out];
    for (let i = 1; i < travel.length; i++) {
        if (travel[i].in !== travel[i - 1].out) result.push(travel[i].in);
        result.push(travel[i].out);
    }
    return result.join('-');
}

console.log(itinerary([{in: "TRN", out: "FCO"}]), "TRN-FCO")
console.log(itinerary([{in: "TRN", out: "FCO"}, {in: "CIA", out: "JFK"}]), "TRN-FCO-CIA-JFK")
console.log(itinerary([{in: "TRN", out: "FCO"}, {in: "FCO", out: "JFK"}]), "TRN-FCO-JFK")
console.log(itinerary([{in: "TRN", out: "FCO"}, {in: "CIA", out: "TRN"}]), "TRN-FCO-CIA-TRN")
console.log(itinerary([{in: "TRN", out: "FCO"}, {in: "FCO", out: "TRN"}]), "TRN-FCO-TRN")