function named(number) {
    let input = number
    if (input > 0) {
        console.log(`It is a positive number ${input}`);

    }
    else if (input < 0) {
        console.log(`It is a Negative number ${input}`);
    }
    else {
        console.log(`Number is Nuetral ${input}`);
    }
}
named(-4)
named(0)
named(12)