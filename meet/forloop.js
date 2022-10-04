for(let i=0; i < 3; i++) {
    console.log(`i - ${i}`)

    for(let j=0; j < 3; j++) {
        console.log(`  j - ${j}`)

        for(let l=0; l < 3; l++) {
            console.log(`     l - ${l}`)
        }
    }

    for(let k=0; k < 3; k++) {
        console.log(`  k - ${k}`)
    }
}

// counter++ => counter+=1 => counter = counter + 1
let sum = 0;
for(let i=0; i < 3; i++) {
    sum = 0
    console.log(`i - ${i}`)
    
    for(let j=0; j < 3; j++) {
        sum=0;
        console.log(`  j - ${j}`)
        sum = sum + 1
    }

    for(let k=0; k < 3; k++) {
        console.log(`  k - ${k}`)
        sum = sum + 1
    }
}
console.log(sum)