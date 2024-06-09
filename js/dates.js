// //STEP 1
// let dt = new Date()
// console.log(dt.getDate())

//STEP 2
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
let dt = new Date()
let name = month[dt.getMonth()]

// //STEP 3
// let d= new Date()
// let dayOfWeek = d.getDay()
// let isWeekend = (dayOfWeek === 6) || (dayOfWeek  === 0); // 6 = Saturday, 0 = Sunday
// if (isWeekend == true)  {
//     console.log('Yes, it is weekend.')
// } else {
//     console.log('No, is not a weekend.')
// }

// //STEP 4
// let d= new Date()
// let todayDayNum= d.getDay()
// let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// let dayName
// if (todayDayNum == 0) {
//     dayName=  days[6]
//     console.log('Yesterday was: ' & dayName  )
// } else {
//     todayDayNum= todayDayNum -1
//     dayName=  days[todayDayNum]
//     console.log('Yesterday was: ' & dayName  )
// }

// //STEP 5
// let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// let d = new Date()
// let dayName = days[d.getDay()]
// console.log('Today\'s day (initial letter) is: ' & dayName.charAt(0))
