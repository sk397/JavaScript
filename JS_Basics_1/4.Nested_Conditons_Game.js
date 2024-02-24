//Nested Loops quiz game to Make Maggie Noodles

const prompt = require("prompt-sync") ();

const PlayGame = prompt("Do you know how to make Maggie? [Y/N]")

if (PlayGame === "Y"){
    const Q2 = prompt ("Great, Can you guide me with the steps? [Y/N]")

    if (Q2 === "Y") {
        console.log("That`s wonderful");
        const Q3 = prompt ("What do i do for the first step? [Add water to pan / Add raw noodles to pan ")
        if (Q3 === "Add water to pan"){
          const Q4 = prompt ("Okay, next what to do? [Boil the water / Add Raw Noodles to cold water? ")
          if (Q4 === "Boil the water") {
            const Q5 = prompt ("Okay, next what to do? [Add Raw Noodles to boiling water / Add Masala ")
            if (Q5==="Add Raw Noodles to boiling water") {
                const Q6 = prompt ("Okay, next what to do? [Add Masala boiling water / Drain the water ")
                if (Q6 === "Add Masala boiling water"){
                    const Q7 = prompt ("Okay, next what to do? [Serve the Maggie / Keep in Fridge? ")
                    if (Q7 === "Serve the Maggie") {
                        console.log(" Great, thank you for teaching me how to make maggie! ");
                    }

                }

            }

          }
        } 
    } 

} else {
    console.log("No Worries, I will watch a Youtube video on how to make it!");
}