function soalVio(n) {
    for (let i = 1; i <= n; i++) {
        let tempat = [];
        for (let j = 1; j <= n + 3; j++) {
            if (j == i + 1 || j == i + 2) {
                tempat.push("*");
            } else {
                tempat.push(j);
            }
        }
        console.log(tempat.join(""));
    }
}
soalVio(2);