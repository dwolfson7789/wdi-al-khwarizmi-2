/* Here's my function to return the correct amount of change for a given
number of cents.  Note that this is easy to maintain. To change the available values, we
just need to change the vals array. So we could easily add in fifty-cent coins, or remove
dimes because we're all out of them, or whatever. HOWEVER, we would still need to actually
manually go into the function and change the array. */
function coins(cents) {
  var result = [];                              // this will be the array we return
  var vals = [1,5,10,25];                       // here's the values of the different coins
  for (var i = vals.length - 1; i >= 0; i--) {  // loop over our values array (in reverse, starting
    result[i] = Math.floor(cents / vals[i]);    // with quarters) and figure out how many we need of each
    cents -= (result[i] * vals[i]);             // put that in our results array, and reduce the amount
    //this should work too instead of line 8:    // of cents accordingly
    //cents %= vals[i];
  }
  return result;
}

/* This does the same thing as the prior version, but by encapsulating it in a coinCal object,
we make it even more flexible. I've written addValue and removeValue methods so that if we don't have
any more nickels, say, we can easily remove them from the calculator, or if we wanted to add in dollar
coins we can do that easily too.  */
var coinCalc = {
  vals: [1,5,10,25],
  getCoins: function(cents) {          // this works the same as the function above!
    var result = [];
    for (var i = this.vals.length - 1; i >= 0; i--) {
      result[i] = Math.floor(cents / this.vals[i]);
      cents -= (result[i] * this.vals[i]);
    }
    return result;
  },
  addValue: function(value) {              //adds a coin of a given value to the vals array
    this.vals.push(value);
    this.vals.sort(function(a,b){return a - b});
    return this.vals;
  },
  removeValue: function(value) {          //removes a given value from the vals array
    var index = this.vals.indexOf(value);
    if (index >= 0) {                     //if that value exists in the array, splice it out
      this.vals.splice(index, 1);
      return this.vals;
    } else {                              //if it ain't in the array, return an error
      throw new Error("error: that value is not in our array");
    }
  }
}
