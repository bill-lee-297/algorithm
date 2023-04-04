function get_primes(num) {
    const prime = [false, false, ...Array(num - 1).fill(true)];

    for (let i = 2; i * i <= num; i++) {
        if (prime[i]) {
            for (let j = i * 2; j <= num; j += i) {
                prime[j] = false;
            }
        }
    }

    const result = prime
        .map((value, index) => {
            if (value) {
                return index;
            }
        })
        .filter((value) => value)
        .join();

    return result;
}

get_primes(67);
