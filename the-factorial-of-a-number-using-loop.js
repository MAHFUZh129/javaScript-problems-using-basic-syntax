function factorial(n){

    let result =1
    for(let i =1; i<=n; i++){

        result *=i
    }
    return result
}

const output=factorial(6)
console.log(output)
