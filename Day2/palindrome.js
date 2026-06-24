
function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log(reversed);
    return reversed;
}


function isPalindrome(str) {
    const reversed = reverseString(str);

    if (str === reversed) {
        console.log('Palindrome');
    } else {
        console.log('Not a palindrome');
    }
}
isPalindrome('MADAM')