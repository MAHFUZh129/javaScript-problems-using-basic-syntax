function countVowel (str){
    const vowels ='aeiou'
    let count=0
    for(let letter of str.toLowerCase()){
        if(vowels.includes(letter)){
            count++
        }      
    }
    return count
}

const result =countVowel('mahfuz hossain')
// console.log(result)
