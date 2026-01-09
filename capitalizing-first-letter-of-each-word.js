function capitalizingWords(str){

    return str.split(' ').map(word=>word[0].toUpperCase()+word.slice(1)).join(' ')
}
const result =capitalizingWords('mahfuz hossain')
console.log(result)