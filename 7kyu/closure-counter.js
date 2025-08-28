function counter(){
    let value = 0;
    return () => {
        value += 1;
        return value;
    };
}