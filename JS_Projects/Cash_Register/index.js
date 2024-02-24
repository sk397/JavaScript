// JS code for the cash register


const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton=document.querySelector("#check-button");
const message=document.querySelector("#error-message");
const noOfNotes=document.querySelectorAll(".no-of-notes"); //Important to use ALL

const availableNotes=[2000,500,100,20,10,5,1];


checkButton.addEventListener("click",function validateBillAmountandCashAmount(){
    hideMessage();
    if(billAmount.value>0){//12
        if(cashGiven.value >= billAmount.value){//2022>12 =>true
            const amountToBeReturned=cashGiven.value-billAmount.value;//2022-12 =>2010
            calculateChange(amountToBeReturned);
        }
        else{
            showMessage("Do you want to wash plates");
        }
        
    }else{
        showMessage("Invalid Bill Amount");
    }

    });
    
    function calculateChange(amountToBeReturned){//2010
        // go  over all the avaialable notes
        for(let i=0;i<availableNotes.length;i++){
            // no of notes need for the denomination
            const numberOfNotes=Math.trunc(
                amountToBeReturned/availableNotes[i]//2010/2000=1
                );

         //amount left after the number of noted needed
        amountToBeReturned=amountToBeReturned % availableNotes[i];//2010%2000=10

        //updating the no.of notes
        noOfNotes[i].innerText=numberOfNotes;
        }
    }
    function hideMessage(){
        message.style.display="none"
    }
    function showMessage(msg){//cannot use message--Overriding will occur
        message.style.display="block"
        message.innerText=msg;
    }
