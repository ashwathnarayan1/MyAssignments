function userProfile(name) {
    console.log("Hello, " + name + "!");
}

// Example call:
userProfile("Ashwath");  // Output: Hello, Ashwath!


const double = (num) => num * 2;

// Example call:
console.log(double(5));  // Output: 10


setTimeout(function() {
    console.log("This message is delayed by 2 seconds");
}, 2000);


function getUserData(callback) {
    setTimeout(() => {
        callback();
    }, 3000);
}

// Example usage:
getUserData(() => {
    console.log("Call Back Function");
});

/////////////////////////////////////////////////////////////////////////////////////////////////////


// Step 1: Declare a global variable
let browser = "Chrome";

// Step 2: Create a function that accepts a callback
function checkBrowserVersion(callback) {
    // Simulate a delay using setTimeout (2 seconds)
    setTimeout(() => {
        // After delay, invoke the callback and pass 'browser'
        callback(browser);
    }, 2000);
}

// Step 3: Write a callback function
function displayVersion(version) {
    console.log("Browser version using callback: " + version);
}

// Step 4: Call the function and pass the callback
checkBrowserVersion(displayVersion);

//////////////////////////////////////////////////////////////////////////////////////////////////////

function intersection(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    let element = arr1[i];

    // Check if element exists in arr2 AND not already in result
    if (arr2.includes(element) && !result.includes(element)) {
      result.push(element);
    }
  }

  return result;
}

// Example calls:

// Case 1: Typical intersection
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));
// Output: [3, 4]

// Case 2: No common elements
console.log(intersection([1, 2, 3], [4, 5, 6]));
// Output: []

// Case 3: All elements common
console.log(intersection([1, 2, 3], [1, 2, 3]));
// Output: [1, 2, 3]

// Case 4: Arrays with duplicates
console.log(intersection([1, 2, 2, 3], [2, 2, 3, 4]));
// Output: [2, 3]
