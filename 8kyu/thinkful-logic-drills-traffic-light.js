function updateLight( current ) {
    let lights = {
        "green": "yellow" ,
        "yellow": "red" ,
        "red": "green"
    };
    return lights[current];
}