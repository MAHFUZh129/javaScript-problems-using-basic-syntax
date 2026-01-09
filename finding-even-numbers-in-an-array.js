function evenNumbers(arr){
    const evens=[]
    
    for(let number of arr){
        if(number%2===0){

            evens.push(number)
        }
    }
    return evens
}
const result =evenNumbers([1,2,5,3,6,8,9])
console.log(result)