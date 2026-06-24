function isOddOrEvenFor(number) {
    for (let index = 1; index <= number; index++) {
        if (index % 2 === 0) {
            console.log(" ");

        }
        else {
            console.log(`The given number is ${index} which is odd number`);
        }

    }
}
isOddOrEvenFor(25)