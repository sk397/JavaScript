// Async Await


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


// Async Await code

async function Init(){
    await createPost({title: 'Post Three', body: 'This is post three'});
    getPosts();
}

Init();