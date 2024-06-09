// //STEP 1
// function OrderWrds(word) {
//     return word.split('').sort().join('')
//   }

// console.log(OrderWrds("webmaster"))

// //STEP 2
// function ChangeLetter(strText) {
//     let splitStr = strText.split(" ")

//     for (let i = 0; i < splitStr.length; i++) {
//         if (splitStr.length[i] < splitStr.length) {
//         splitStr[i].charAt(0).toUpperCase();
//         }
//         strText = splitStr.join(" ");
//     }
//         return strText;
//     }

// console.log(ChangeLetter("the quick brown fox"))

// //STEP 3
// function vowelCount(strText) {
//     const vowelRegex = /[aeiou]/gi; 
//     const strMatches = strText.match(vowelRegex);

//     if (strMatches) {
//         return strMatches.length;
//     } else {
//         return 0; 
//     }
// }
// let string = "The quick brown fox";
// console.log("Number of vowels:" & vowelCount(string));


// //STEP 4
// function StringID(lngt) {
//     let str = "";
//     var schars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//         for(let i= 0; i < lngt; i++ ) {  
//         str += schars.charAt(Math.floor(Math.random() * schars.length));
//         }
//         return str
//     }

// console.log(StringID(10));

// //STEP 5
// function Longest_Country_Name(arrText) {
//     let maxLenght= Math.max(arrText.map(arrText => arrText.length))
//     return arrText.find(arrText => arrText.length === maxLenght)
//     }
// console.log(Longest_Country_Name["Australia", "Germany", "United States of America"])