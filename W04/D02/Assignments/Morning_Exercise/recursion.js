//recursively subtracts 2 from n until it winds up with 0 ("even") or 1 ("odd")
function isEven(n) {
  if (n === 0) {
    return "Even";
  } else if (n === 1) {
    return "Odd";
  } else {
    return isEven(n-2); // HERE BE RECURSIONS
  }
}

// calculates the value of the nth term in the Fibonnaci series
// note that this will make 2^n function calls!! Do NOT attempt to use for n > ~35
// unless you think crashing your browser will be fun!
function fibonnaci(n) {
    if (n <= 1) {
        return 0;
    } else if (n <= 3) {
        return 1;
    } else {
        return fibonnaci(n - 1) + fibonnaci(n-2); // HERE BE MULTIPLE RECURSIONS!
    }
}
