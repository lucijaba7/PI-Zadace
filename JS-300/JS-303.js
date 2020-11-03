const ackermann = function (m, n){
    if (m == 0)
        return n + 1;
    else if (m > 0 && n == 0)
        return ackermann(m-1, 1);
    else if (m > 0 && n > 0)
        return ackermann(m-1, ackermann(m, n-1));
    else return 0;
}
console.log(ackermann(0, 5)) // → 6
// console.log(ackermann(5, 0)) // → 65533  {"Maximum call stack size exceeded"}
console.log(ackermann(3, 6)) // → 509
console.log(ackermann(3, 3)) // → 61 
