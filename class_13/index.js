// object
var obj = {
    name: "Taher Mamun",
    age: 67,
    address: "Sylhet",
    mark: [55, 66, 777, 88]
}

function Student(name, age, address, mark) {
    this.name = name
    this.age = age
    this.address = address
    this.mark = mark

    this.myFunc = function () {
        console.log(this.name);
        console.log(this.age);
        console.log(this.address);
        console.log(this.mark);
    }

}
var sakib = new Student("Sakib", 22, "Dhaka", [55, 66, 77])
var taherMamun = new Student("Taher Mamun", 32, "Sylhet", "ahahah")

// sakib.myFunc()


// console.log(sakib);
// console.log(taherMamun);





// ################ Math Methods ###############


// var result = Math.ceil(4.9)
// var result = Math.floor(4.9)
// var result = Math.round(4.5)
// var result = Math.sqrt(16)
// var result = Math.pow(4,2)
// var result = Math.max(55,66,22,11)
// var result = Math.min(55,66,22,11)
// var result = Math.random()

// console.log(result)


// ################ Date Methods ###############

// var date = new Date()
// var result = date.getDate()
// var result = date.getFullYear()
// var result = date.getMonth()
// var result = date.toDateString()
// var result = date.toLocaleDateString()
// console.log(result);


// previous class problem
var arr = [
    ["Taher", 120],
    ["Mamun", 100],
    ["Ahmed", 150],
]
function myFunc(arr) {

    var name = arr[0][0]
    var mark = arr[0][1]

    for (var x = 0; x < arr.length; x++) {
        if (mark < arr[x][1]) {
            mark = arr[x][1]
            name = arr[x][0]
        }
    }
    var result = "my name is " + name + ". I got highest mark " + mark
    return result

}
var name = myFunc(arr)
// console.log(name);


// problem 2: Find second largest number from array

// var arr2 = [4, 5, 6, 7, 8, 9,3456,87,2222,9999,0987654]

// function secondLargestNumber(arr2) {

//     var max = -Infinity
//     var secondLargest = -Infinity

//     for (var x = 0; x < arr2.length; x++) {
//         if (max < arr2[x]) {
//             secondLargest = max
//             max = arr2[x]
//         }else if (arr2[x] < max && arr2[x] > secondLargest) {
//             secondLargest = arr2[x]
//         }
//     }
// return secondLargest

// }
// console.log(secondLargestNumber(arr2));



// problem 2: Find second largest number from array

// var arr2 = [1,3,5,7]

// var myFunc =()=>{ }

// var result = arr2.sort((a, b) => {
//     return a-b
// })
// console.log(result[1]);



// problem: 3: make a sokka

// for (var x = 0; x < 10; x++) {
//     var result = Math.floor(Math.random() * 6 + 1)
//     console.log(result)
// }

// var result = Math.floor(Math.random() * 6 + 1)
// console.log(result)


// problem 4: write a string and check first or start with java.
// If match java then say hello otherwise say who are you?



// function checkFirstWord(data) {

//     var result = data.slice(0, 4)
//     console.log(result)
//     if (result === "java") {
//         console.log("hello")
//     } else {
//         console.log("who are your?")
//     }
// }
// checkFirstWord('ok em')





// Home Work
// 1. All Math methods practice
// 2. All Date methods practice
// 3. * first day salary : 10 and it dubble everyday. show day 30 number days salary 