let a = "uday"
let pass = ""

for (let index = 1; index <= a.length; index++) {
    let char = Math.floor(Math.random() * a.length + 1)
    str = a.charAt(char)
    console.log(char + " " + str)
    pass += str
} 
console.log(pass)