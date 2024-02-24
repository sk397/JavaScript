// Promises in JS

const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'post two', body: 'This is post two'}
];

function getPosts (){
    // Seting a callback function here
    setTimeout(() => {
        let output = "";
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
     }, 1000);
}


function createPost (post) {
    return new Promise((resolve, reject) => {
         setTimeout(() => {
            posts.push(post);
            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error: something went wrong');
            }
         }, 2000)
    });
}

// createPost({ title: 'Post three', body: 'this is post three'}).then(getPosts)

// Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'GoodBye'));

const promise4 = fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json());

Promise.all([promise1,promise2,promise3]).then((values) => console.log(values));