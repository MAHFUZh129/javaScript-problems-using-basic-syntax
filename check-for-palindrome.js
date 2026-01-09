function isPalindrome(str){
    const reversed = str.split('').reverse().join('')
   return str===reversed
}

const result = isPalindrome('mom')
console.log(result)