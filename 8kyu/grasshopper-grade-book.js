function getGrade (s1, s2, s3) {
    let average = (s1 + s2 + s3)/3;
    return average < 60 ? 'F' :
        average < 70 ? 'D' :
            average < 80 ? 'C' :
                average < 90 ? 'B' : 'A';
}