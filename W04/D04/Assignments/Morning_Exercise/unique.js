/*
Challenge: write a function that takes in a string and returns
'true' if the string has all unique characters and 'false' if
any of the characters are repeated.
So:
unique('syed') --> returns true
unique('lizaramo') --> returns false
*/

// SOLUTION 1: NESTED LOOPS
// this is very computationally inefficient: for a string of length n, it will
// perform n^2 operations. However it IS space efficient: it uses no additional
// storage space on the computer
// this function loops over the string and compares each character in turn with
// the following characters. If any match, it returns FALSE; otherwise it returns TRUE
function unique1(str) {
  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false
      }
    }
  }
  return true;
}

// SOLUTION 2: HASH
// this is much more computationally efficient than the solution above: for a string
// of length n, it will only perform n operations. However, it uses n additional storage
// on the machine to store the 'chars' object. So if space is at a severe premium you
// might want Solution 1; if computational time is at a premium, you'd want this solution
// This solution stores the characters in an object (a 'hash') as it goes so it only
// needs a single 'for' loop
// TRY RUNNING THIS AND CONSOLE.LOGGING 'chars' each time in the loop!
function unique2(str) {
  var chars = {};
  for (var i = 0; i < str.length; i++) {
    if (chars[str[i]]) {
      return false;
    } else {
      chars[str[i]] = true;
      // console.log(chars);
    }
  }
  return true;
}
