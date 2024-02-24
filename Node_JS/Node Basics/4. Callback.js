// Call backs in Js
// A callback is a function that gets executed to an event


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

function createPost(post, callback) {
setTimeout(() =>{
  posts.push(post);
  callback();
},2000)
}


createPost({title: 'Post Three', body: 'This is post three'}, getPosts)

