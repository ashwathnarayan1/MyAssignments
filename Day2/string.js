const { reverse } = require("node:dns");

function string() {
    let input = 'Hello World'
    let splitted = input.split(" ")
    console.log(splitted);
    console.log(splitted[1].length);

    let input1 = " fly me to the moon "
    let splitted1 = input1.trim().split(/\s+/);
    console.log(splitted1);
    console.log(splitted1[4].length);

}
string()

function anagram(str1, str2) {
    str1 = str1.trim().toLowerCase();
    str2 = str2.trim().toLowerCase();
    if (str1.length !== str2.length) {
        console.log("Not An anagram");
        return
    }
    let array1 = str1.split("");
    let array2 = str2.split("");

    array1.sort();
    array2.sort();
    let sorted1 = array1.join("");
    let sorted2 = array2.join("");
    if (sorted1 === sorted2) {
        console.log("Anagram");
    }
    else {
        console.log("Not Anagram");
    }
}
anagram('Listen', 'Silent')
anagram('Hello', 'world')