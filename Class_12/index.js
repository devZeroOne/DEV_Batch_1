
// function

// function muFunc(name, age) {

//     var intro = "my name is " + name + " my age is " + age

//     return intro
// }

// var taher = muFunc("Taher Mamun", 89)
// var kabir = muFunc("kabir", 19)

// console.log(taher);
// console.log(kabir);



// ****************
// IIFE

// (function (name1, name2, age) {
//     var intro = "my name is " + name2 + " my age is " + age

//     console.log(intro);
// })("Taher Mamun", "Khabir", 89)


//***************** */
// function expression
// var newFunc = function (name, age) {
//     var intro = "my name is " + name + " my age is " + age

//     return intro
// }

// console.log(newFunc("taher", 22))





// ********** ARRAY ****************


var student1 = "tarek"
var student2 = "Biplob"
var student3 = "sandip"
var student4 = "suhag"
var student5 = "karim"

// var students = ["tarek","Biplob", "sandip","suhag","karim"]
// console.log(students.length)

// var num2stu = students[students.length - 2] 
// console.log(num2stu)

// var arr = Array("tarek","Biplob", "sandip","suhag","karim")

// console.log(students);

// problem: 1_ show me array last index number 
// var lastIndex = students.length - 1
// console.log(lastIndex)


// array methos

// var students = ["tarek","Biplob", "sandip","suhag","karim"]
// var stu2 = ["x", "y"]
// console.log(students);

// students.push("Angel Kuriya")
// students.pop()
// students.shift()
// students.shift()
// students.shift()
// students.unshift("misir Ali")
// console.log(students.concat(stu2));

// console.log(students);


// . slice

// . splice
// var students = ["tarek","Biplob", "sandip","suhag","karim"]

// students.splice(startingIndex, numberOfItemForDelete, newData)
// students.splice(2, 2, 'HeroAlom', "porimon", "jayed khan")
// students.splice(0, 1)
// console.log(students)


// sort

// var students = ["Babul", "Kamal", "abul", "Rafik"]
// var result  = students.sort()
// var result  = students.reverse()

// var num = [4, 5, 7, 3, 9, 1, 'taher', '50', 4]
// var result = num.sort()
// var result = num.reverse()
// console.log(result)


// Array Dimention(one, two)

// var name = [[3, 5, 6], [9, 1, 7],]
// console.log(name[1][2])
// problem 2
// sum all array value
// var num = [4, 5, 8, 2]
// var sum = 0
// for (var x = 0; x < num.length; x++) {
//     sum = sum + num[x]
// }
// console.log(sum);

// problem 3
// show hightest value from a array
// var num = [4, 5, 8, 2]

// function mySort(arr) {

//     var maxNumber = arr[0]

//     for (var x = 1; x < arr.length; x++) {

//         if (maxNumber < arr[x]) {

//             maxNumber = arr[x]

//         }
//     }
//     return maxNumber
// }
// var result = mySort([4, 5, 8, 2])

// console.log(result)


// HomeWork
// T-1: show the lowest value form a array

// example array: [["Taher", 120], ["Mamun", 210], ["karim", 50]]

// T-2: show hightest number with who gain this number 