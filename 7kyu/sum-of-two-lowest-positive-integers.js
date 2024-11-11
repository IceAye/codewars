function sumTwoSmallestNumbers( numbers ) {
    return numbers.sort(( a , b ) => a - b)
                  .filter(( min , index ) => index < 2)
                  .reduce(( sum , current ) => sum + current , 0)
}