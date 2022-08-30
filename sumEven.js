sumEven = 0
limit = 1000
for (let i = 0; i <= limit; ++i) {
    if (i % 2 == 0) {
        sumEven += i
    }
}

console.log(sumEven)