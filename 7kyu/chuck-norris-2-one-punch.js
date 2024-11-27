const onePunch = (items) => typeof items === 'string' && items.length > 0 ? items.split(" ").sort().join(" ").replace(/[ea]/ig , '') : 'Broken!'


console.log(onePunch('Beard Knife Grenade Motorbike Hat')) // 'Brd Grnd Ht Knif Motorbik'
console.log(onePunch('Horse Rope Cups Car Beard')) // 'Brd Cr Cups Hors Rop'
console.log(onePunch('Friend Beer Beard Monkey Laptop')) // 'Brd Br Frind Lptop Monky'