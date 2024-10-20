function meeting(s) {
    return s
        .split(";")
        .map((item) => item.replace(/(\w+):(\w+)/gi, "($2, $1)").toUpperCase())
        .sort()
        .join("");
}

console.log(
    meeting(
        "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn",
    ),
);
console.log(
    meeting(
        "John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell",
    ),
);
console.log(
    meeting(
        "Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern",
    ),
);

// (ARNO, ANN)(BELL, JOHN)