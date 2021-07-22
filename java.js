
//********************************Task 1****************************** */
neighBours = ["West Bengal", "Mizoram", "Meghalaya" , "Tripura","Assam"]

// to add new country to the end of the array 
neighBours.push('Utopia')
console.log(neighBours)

// to remove the new country from the end 
neighBours.pop('Utopia')
console.log(neighBours)

// to check if Germany is included in the array 
if (neighBours.includes("Germany")) {
    console.log(`Germany is in the Neighbours Countries`)
} 
else {
    console.log(`Probably not a central European country :D`)
}

// to change the name of one of my neighbouring countries
neighBours[2] = "Sweden"
console.log(neighBours)

//****************************Task 2*********************************** */

// function CountOfString(str1 , str2 ) {
//     let count = 0 ;
//     for (let i = 0; i < str2.length; i++){
//         if (str2[i]===str1) {
//             count =count + 1 ;
//         }
//     }
//     return count;
// }
// console.log(CountOfString("s",'How many times does the character occur in this sentence?'))

//*******************************Task 3 ***************************** */

// let countryInfo = {
//     city:"Sacramento" ,
//     state: 'California',
//     country: 'USA',
//     continent: 'North America'
// }

// function CountryDetails(countryInfo) {
//     delete countryInfo.country
//     return countryInfo
// }
// console.log(CountryDetails(countryInfo)) 

//**********************************Task 4**************************** */

// let Bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// let Tips = []
// let Total = []

// for (let i = 0; i < Bills.length ; i++) {
//     if (Bills[i] >= 50 && Bills[i] <= 300) {
//         Tips.push(Bills[i] * 0.15)
//         Total.push(Bills[i] + (Bills[i] * 0.15))
//     }
// else {
//     Tips.push(Bills[i] * 0.2)
//     Total.push(Bills[i] + Bills[i] * 0.2 )
// }
// }
// console.log(Tips)
// console.log(Total)

//**********************************Task 5**************************** */
// let sum = 0 ;
// function calcAverage(myArray) {
//     for (let i = 0; i < myArray.length ; i++) {
//         sum += myArray[i];
        
//     }
//     return sum / myArray.length
// }   

// console.log(calcAverage([4,5,5]))
    








