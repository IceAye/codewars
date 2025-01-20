function getVillainName(birthday){
    const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
    const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];

    return `The ${m[birthday.getMonth()]} ${d[+birthday.getDate().toString().at(-1)]}`
}

console.log(getVillainName(new Date("April 21"))) // "The Trashy Pickle"
