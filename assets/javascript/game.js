//let winsCounter = document.getElementById("wins");
//let lossCounter = document.getElementById("losses");
let numberToMatch = document.getElementById("numberToMatch");
//let numberSoFar = document.getElementById("numberSoFar");
let diamond = document.getElementById("diamondPic");
let opal = document.getElementById("emeraldPic");
let purple = document.getElementById("purplePic");
let red = document.getElementById("redPic");
let computerPick = document.getElementById("computerPick");
              
let diamondPic;
let emeraldPic;
let purplePic;
let redPic;
let winsCounter = 0;
let lossCounter = 0;
// let computerPick = 0;
let numberSoFar = 0;

            
var computerPickFunction = function() {
        return Math.floor(Math.random() * (120 - 19 + 1) + 19);
}

var gemPic = function(){
return Math.floor(Math.random() * (12-1) + 1);
}  

var checkWin = function(gemPicNum) {
        numberSoFar += gemPicNum;

        $("#numberSoFar").text("Number So Far: " + numberSoFar); 
        $("#numberToMatch").text("Number To Match: " + computerPick);
                if(numberSoFar > computerPick) {
                        lossCounter++;
                        $("#losses").text("Losses: " + lossCounter);
                        numberSoFar = 0;
                        numberToMatch = 0;
                        diamondPic = gemPic();
                        emeraldPic = gemPic();
                        redPic = gemPic();
                        purplePic = gemPic(); 
                        computerPick = computerPickFunction();   
                        $("#numberSoFar").text("Number So Far: " + 0);
                        $("#numberToMatch").text("Number To Match: " + computerPick);   
                }
                else if(numberSoFar === computerPick) {
                        winsCounter++;
                        $("#wins").text("Wins: " + winsCounter);
                        numberToMatch = 0;
                        numberSoFar = 0;
                        diamondPic = gemPic();
                        emeraldPic = gemPic();
                        redPic = gemPic();
                        purplePic = gemPic(); 
                        computerPick = computerPickFunction();
                        $("#numberSoFar").text("Number So Far: " + 0); 
                        $("#numberToMatch").text("Number To Match: " + computerPick);
                }                         
}


$(document).ready(function() {
        diamondPic = gemPic();
        emeraldPic = gemPic();
        redPic = gemPic();
        purplePic = gemPic(); 
        computerPick = computerPickFunction();
        $("#numberToMatch").text("Number To Match: " + computerPick);
        console.log(computerPick);

        $("#diamondPic").on("click", function() {
                checkWin(diamondPic);
                console.log(diamondPic);
        });
            
        $("#emeraldPic").on("click", function() {
                checkWin(emeraldPic);
                console.log(emeraldPic);
        });
            
        $("#purplePic").on("click", function() {
                checkWin(purplePic);
                console.log(purplePic);
        });
            
        $("#redPic").on("click", function() {
                checkWin(redPic);
                console.log(redPic);
        });                       
});