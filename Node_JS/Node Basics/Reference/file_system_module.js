// Syncronous fucnitons - where the code is executed step by step
// Asycrionous fucntions - where the code is executed irrespective of the previous code complemtion


const fs = require ('fs')
const path = require ('path')


//Below functions are Asyncronous, so we have to delete the tets folder and then run this script code

//Creating a folder
fs.mkdir(path.join(__dirname, '/test'),{}, err =>{
    if (err) throw err;
    console.log("Folder Created");
});

// Create and Write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', 
    err => {
        if (err) throw err;
        console.log("File Wirtten to...");


// Appending to the file
fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I Love Node Js', 
err => {
    if (err) throw err;
    console.log("File Wirtten to...");
}
)


    }
);

// Read File - While running comment the above codes

fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});


//Rename File 

fs.rename(
path.join(__dirname, '/test', 'hello.txt'),
path.join(__dirname, '/test', 'Helloworld.txt'),
err => {
    if (err) throw err;
    console.log("File Renamed");
}

)
