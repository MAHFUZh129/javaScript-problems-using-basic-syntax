function removeDuplicates(arr) {
  return [...new Set(arr)];
}
const result =removeDuplicates([1,2,3,2,4,4,5,1,5,6])
// console.log(result)