const quarterOf = (month) => {
    return (month > 0 && month < 4) ? 1 :
        (month > 3 && month < 7) ? 2 :
            (month > 5 && month < 10) ? 3 : 4;
}