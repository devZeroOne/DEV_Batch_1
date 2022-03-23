// JSON**********

// const person = {
//     name: 'John',
//     age: 21,
//     address: 'sylhet'
// }

// const objToJSON = JSON.stringify(person)

// const personJSON = {
//     "name": "Jhon",
//     "age": 21,
//     "address": "sylhet"
// }



// const JSONToObj = JSON.parse(objToJSON)


// console.log(person)
// console.log(objToJSON)
// console.log(JSONToObj)


// JSON PLACEHOLDER
// show data in html

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(DATA => showData(DATA))
//     .catch(error =>console.log(error.message))


// function showData(users) {
//     const username = users.map(user => user.username)
//     // console.log(username)

//     const ul = document.getElementById("users")

//     for (let x = 0; x < username.length; x++) {
//         const singleUser = username[x]
//         console.log(singleUser)

//         const li = document.createElement("li")
//         li.innerText = singleUser
//         ul.appendChild(li)
//     }
// }




// create data for post method




// phase 1 ***********

// const person1 = {
//     title: 'Taher Mamun',
//     message: 'Tik ace bujte parci',
//     userId: 17,
//   }


// fetch('https://jsonplaceholder.typicode.com/posts', {

//   method: 'POST',
//   body: JSON.stringify(person1),

//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },

// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));



//   phase 2 ****************************************


document.getElementById('button').addEventListener('click', function () {
    const username = document.getElementById('userName').value;
    const message = document.getElementById('message').value;

    const data = {
        name: username,
        message: message
    }
    newPost(data)
})


const newPost = (data) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => console.log( "my data", data));

}


