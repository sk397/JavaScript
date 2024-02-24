
function learn() {

// We are passing the process.argv[2] feature  (2nd index from the script, after we write node abc.js xyz)
// in this file, we would write it as   node 3. process.argv.js hello
// And the mission obejct will take the same from the script

const mission = process.argv[2]

if (mission === 'learn') {
    console.log("Learning is fun indeed");
} else {
    console.log(`Do you like to ${mission}`);
}
}

learn();