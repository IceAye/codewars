function howMuchILoveYou( nbPetals ) {
    return (nbPetals % 6 == 1) ? "I love you" :
        (nbPetals % 6 == 2) ? "a little" :
            (nbPetals % 6 == 3) ? "a lot" :
                (nbPetals % 6 == 4) ? "passionately" :
                    (nbPetals % 6 == 5) ? "madly" : "not at all"

}