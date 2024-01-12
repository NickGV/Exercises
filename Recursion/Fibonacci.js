function fibs(n) {
  let fib = [0, 1];

  for (let i = 2; i <= n - 1; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// console.log(fibs(8));

function fibsRec(n, a = 0, b = 1, fibSequence = []) {
  if (n > 0) {
    fibSequence.push(a);
    return fibsRec(n - 1, b, a + b, fibSequence);
  } else {
    return fibSequence;
  }
}

console.log(fibsRec(8));
