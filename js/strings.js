// //STEP 1
// let usrname = prompt("Please enter your name")
// if (usrname != null) {
//     console.log(usrname.length)
// }

// //STEP 2
// let usrname2 = prompt("Please enter your name")
// let num = prompt("Please enter a numeric value")
//     console.log(`"Letter " ${usrname2.charAt(num)} is located at position ${num}`)

// //STEP 3
// let fName = prompt("Please enter your first name")
// let lName = prompt("Please enter your last name")
//     console.log("Your Name is:" & fName.concat(lName))

// //STEP 4
// let text= "The quick brown fox jumps over the lazy dog"
// console.log(text.indexOf('fox'))

// //STEP 5
// let textfind="The quick brown fox jumps over the lazy fox"
// console.log(textfind.lastIndexOf('fox'))

// //STEP 6
// let chars= "The quick brown fox jumped over the lazy dog"
// let fullName = prompt("Please enter your full name")
// console.log(text.replace('the lazy dog', fullName))

// //STEP 7
// let text7= "The quick brown fox jumps over the lazy dog"
// let eWord = prompt("Please enter any word")
// console.log(text7.search(eWord))

// //STEP 8
// let old_string= "The quick brown fox jumps over the lazy dog"
// let new_string= old_string.slice(30,12)
// console.log(new_string.toUpperCase())

//STEP 9
// let text= " THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          "
// console.log(text.trim().toLowerCase())

//STEP 10
let text= "the quick brown fox jumps over the lazy dog"
let capLetter= text.slice(0,1).toUpperCase()
let allLetters= text.slice(1,text.length() -1)
console.log(capLetter.concat(allLetters))
