function precRound(number, precision) {
    number *= Math.pow(10, precision);
    number += 0.5;
    number = number | 0;
    return number / Math.pow(10, precision);
}

function negativeRandom() {
    var sign = Math.random();
    if (sign < 0.5) {
        sign = -1;
    }
    else {
        sign = 1;
    }
    return Math.random() * sign;
}