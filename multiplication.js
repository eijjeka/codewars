const multiplication = n => {
    for (let i = 1; i <= n; i += 1) {
        for (let j = 1; j <= 10; j += 1) {
            console.log(`${i} x ${j} = ${i * j}`)
        } 
    }
}

multiplication(5)