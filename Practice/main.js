// console.log("Hello World");

// const myName = prompt("Enter Your Name");

// let randomValue = Math.floor(Math.random()* )+ 1;
// let randomLetterFromName = Math.floor(Math.random()*myName.length);

// console.log(myName.charAt(randomLetterFromName));
// let testScoreOfStudent = prompt("Enter Your Score");
// let grade;
// if(testScoreOfStudent >=90)
// {
//      grade = "O";
// }
// else if(testScoreOfStudent >=75){
//      grade = "A";
// }
// else if(testScoreOfStudent >=65){
//      grade = "B";
// }
// else if(testScoreOfStudent >=55){
//      grade = "C";
// }
// else{
//      grade ="U";
//      console.log("Sorry Try Next Time!");
// }
// console.log("Your Grade Is " + grade);
// let studentScore = 90;
// let sutdentExpelled = false;
// let results = sutdentExpelled ? "Sorry, Your Expelled":
//               studentScore ? "Your Score is " + studentScore : "You Don't Have Score";
// console.log(results);

// let userName = prompt("Enter Your Name");
// if(userName){
//      console.log(userName.length);
//      console.log(userName.trim().length);
//      console.log(userName.trim());
// } 
// else{
//      console.log("You did't enter your name");
// }

/* Rock Paper Scissors game*/
let startGame = confirm("Shall We Play Rock Paper Scissors");
if(startGame){
     // play
     let playerChoice = prompt("Choose One Of this ROCK PAPER SCISSORS");
     if(playerChoice){
          // Now Computer Chooses what it want to pick
          let userPlay = playerChoice.trim().toUpperCase();
          if(userPlay === "ROCK" || userPlay ==="PAPER" || userPlay==="SCISSORS")
          {
               let computerChoice = Math.floor(Math.random()*3 +1);
               let computerPick = computerChoice ===1 ? "ROCK":
               computerChoice === 2 ? "PAPER":
               "SCISSORS"
          let results = 
                         playerChoice === computerPick ? "PlayerChoice " + playerChoice +"\n ComputerChoice " + computerPick + "\n It's a TIE" :
                         playerChoice === "ROCK" && computerPick === "PAPER" ? "PlayerChoice " + playerChoice +"\n ComputerChoice " + computerPick + "\n Computer Wins 🎉" :
                         playerChoice === "PAPER" && computerPick === "SCISSORS" ? "PlayerChoice " + playerChoice +"\n ComputerChoice " + computerPick + "\n Computer Wins 🎉" :
                         "PlayerChoice " + playerChoice +"\n ComputerChoice " + computerPick + "\n Player Wins 🎉" ;
          console.log(results);
          alert(results);
          let playAgain = confirm("Play Again If You Want To Win!!!");
          playAgain ? location.reload() : alert("Ok than Bey");
          }
          else{
               alert("Please Enter Valid Choice!")
          }
     }
     else{
          alert("Do You Want To Retrive")
     }
}
else{
     alert("Ok let's Play Later");
}