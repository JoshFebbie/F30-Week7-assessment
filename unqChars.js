//This function should run 0(n^2)
function uniqueChars(str) {
    let uniqueChars = new Set([])

        for (let i = 0; i < str.length; i++) {
            uniqueChars.add(str[i])
    }
    return uniqueChars.size === str.length
}
console.log(uniqueChars("boy"))
console.log(uniqueChars("bob"))
console.log(uniqueChars("josh"))
console.log(uniqueChars("bobby"))
console.log(uniqueChars("little"))