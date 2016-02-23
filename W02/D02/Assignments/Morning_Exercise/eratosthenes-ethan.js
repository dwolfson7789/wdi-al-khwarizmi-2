function eratosthenes(n) {
  var primes = [];
  // [ true, true, true, ..., true  ]

  for (var i = 0; i <= n; i++) {
    primes.push(true);
  }

  primes[0] = false;
  primes[1] = false;
  // console.log(primes);

  for (var i = 2; i <= n; i++) {
    console.log("i is currently", i);
    if (primes[i]) {
      console.log("primes[i] is true");
      for (var j = i + i; j < n; j += i) {
        console.log("j is currently", j);
        if (primes[j]) {
          primes[j] = false;
        }
      }
    }
  }

  // [ false, false, true, true, false, true, false, true, false, false ...]

  for (var i = 0; i < n; i++) {
    if (primes[i]) {
      console.log(i);
    }
  }
}







}
