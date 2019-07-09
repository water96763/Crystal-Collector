let winsCounter = document.getElementById("wins");
let lossCounter = document.getElementById("losses");
let numberToMatch = document.getElementById("numberToMatch");
let numberSoFar = document.getElementById("numberSoFar");
let diamond = document.getElementById("diamondPic");
let opal = document.getElementById("emeraldPic");
let purple = document.getElementById("purplePic");
let red = document.getElementById("redPic");
let computerPick = document.getElementById("computerPick");
              
$(document).ready(function() {
    var winsCounter = 0;
    var lossCounter = 0;
    var numberSoFar = 0;
    var computerPick = 0;

            
    var resetGame = function() {               
            numberSoFar = 0;
            var computerPick =Math.floor(Math.random() * (120 - 19 + 1) + 19);
            $("#numberToMatch").text("Number To Match: " + computerPick);
            console.log(computerPick);
                    
            var gemPick = function(){
                return Math.floor(Math.random() * (12-1) + 1);
            }  
            gemArray = 0;                
            var gemArray = Array(4).fill().map(gemPick);
            var diamondPic = gemArray[0]; console.log(diamondPic);
            var emeraldPic = gemArray[1]; console.log(emeraldPic);
            var purplePic = gemArray[2]; console.log(purplePic);
            var redPic = gemArray[3]; console.log(redPic);

            $(document).on('click', "#diamondPic", function() {
                
                numberSoFar += diamondPic;
                $("#numberSoFar").html("Number So Far: " + numberSoFar); 

                    if(numberSoFar > computerPick) {
                        lossCounter++;
                        $("#losses").html("Losses: " + lossCounter);
                        $("#numberSoFar").html("Number So Far: " + 0);
                        gemArray.length = 0;
                        resetGame();                                    
                    }
                    else if(numberSoFar === computerPick) {
                        winsCounter++;
                        $("#wins").html("Wins: " + winsCounter);
                        $("#numberSoFar").html("Number So Far: " + 0); 
                        gemArray.length = 0;
                        resetGame();  
                    }                          
            });

            $(document).on('click', "#emeraldPic", function() {
                
                numberSoFar += emeraldPic;
                $("#numberSoFar").html("Number So Far: " + numberSoFar);

                    if(numberSoFar > computerPick) {
                            console.log("hi");
                            lossCounter++;
                            $("#losses").html("Losses: " + lossCounter);
                            $("#numberSoFar").html("Number So Far: " + 0);
                            gemArray.length = 0;
                            resetGame();                                   
                    }
                    else if(numberSoFar === computerPick) {
                            winsCounter++;
                            $("#wins").html("Wins: " + winsCounter);
                            $("#numberSoFar").html("Number So Far: " + 0);
                            gemArray.length = 0;
                            resetGame();
                    }           
            });
                      
            $(document).on('click', "#purplePic", function() {
       
                numberSoFar += purplePic;
                $("#numberSoFar").html("Number So Far: " + numberSoFar); 
       
                    if(numberSoFar > computerPick) {
                            console.log("hi");
                            lossCounter++;
                            $("#losses").html("Losses: " + lossCounter);
                            $("#numberSoFar").html("Number So Far: " + 0);
                            gemArray.length = 0;
                            resetGame();                                  
                    }
                    else if(numberSoFar === computerPick) {
                            winsCounter++;
                            $("#wins").html("Wins: " + winsCounter);
                            $("#numberSoFar").html("Number So Far: " + 0);
                            gemArray.length = 0;
                            resetGame();
                    }           
            });
 
            $(document).on('click', "#redPic", function() {
        
                numberSoFar += redPic;
                $("#numberSoFar").html("Number So Far: " + numberSoFar);
        
                    if(numberSoFar > computerPick) {
                            console.log("hi");
                            lossCounter++;
                            $("#losses").html("Losses: " + lossCounter);
                            $("#numberSoFar").html("Number So Far: " + 0);
                            gemArray.length = 0;
                            resetGame();                                  
                    }
                    else if(numberSoFar === computerPick) {
                            winsCounter++;
                            $("#wins").html("Wins: " + winsCounter);
                            $("#numberSoFar").html("Number So Far: " + 0);
                            gemArray.length = 0;
                            resetGame(); 
                    }           
            });
    } 
    
    resetGame();  
             
});