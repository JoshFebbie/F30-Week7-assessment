//I believe this function has a O(n) runtime.//
function findLongestWord(string) {
    let str = string.split(" ")
    let longest = 0
    let word = null

    str.forEach(function(str) {
        if (longest < str.length) {
        longest = str.length
        word = str
        }
    })
    return word
}
console.log(findLongestWord("He has pneumonoultramicroscopicsilicovolcanoconiosis."))
console.log(findLongestWord("Who what when and shabaam."))
console.log(findLongestWord("What is the longer longest word here?"))