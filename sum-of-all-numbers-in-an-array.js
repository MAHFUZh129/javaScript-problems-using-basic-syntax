function sumOfArray(arr){
    let total= 0
    for(let i=0;i<arr.length;i++){
        total +=arr[i]
    }
    return total
}
const result =sumOfArray([1,5,7,8,9])
console.log(result)