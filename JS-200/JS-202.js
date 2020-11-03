ispis = "";

for (let i = 1; i <= 100; i++){
    if (!(i % 3) && !(i % 5))
        ispis += ("FizzBuzz");
    else if (!(i % 3))
        ispis += ("Fizz");
    else if (!(i % 5))
        ispis += ("Buzz");
    else
        ispis += (i);
    ispis += " ";
}

console.log(ispis);