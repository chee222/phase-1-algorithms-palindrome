function isPalindrome(str) {
    // Write your algorithm here
    const sanitizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = sanitizedStr.split('').reverse().join('');
    return sanitizedStr === reversedStr;
  }

  console.log(isPalindrome('abba')); // true
  console.log(isPalindrome('racecar')); // true
  console.log(isPalindrome('a')); // true
  console.log(isPalindrome('robot')); // false
  console.log(isPalindrome('ab')); // false

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
