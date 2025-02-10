













function Moves() {
 const No = Math.random();
 let CPUmove ='';
  if(No >= 0 &&  No < 0.3) {
  CPUmove = 'ROCK';
  } else if(No >= 0.3 && No < 0.6) {
   CPUmove = 'PAPER';
  } else if( No >= 0.6 && No < 1) {
      CPUmove = 'SCISSORS';
  }
  console.log(CPUmove);
  return CPUmove;
  }


const score = {
  Wins : 0,
  Losses : 0,
  Ties : 0,
};
/*
console.log(localStorage.getItem('message'));*/


function MyResult(MyMove) {
     const CPUmove = Moves();
 
 let results = '';
 console.log(results);
 if(MyMove === 'ROCK') {
if (CPUmove === 'ROCK'){
    results = 'TIE';
}else if (CPUmove === 'PAPER'){
    results = 'YOU LOSE';
}else if (CPUmove === 'SCISSORS'){
    results = 'YOU WIN';
}
}
else if(MyMove === 'PAPER') {
if (CPUmove === 'ROCK'){
    results = 'YOU WIN';
}
else if (CPUmove === 'PAPER'){
    results = 'TIE';
}
else if (CPUmove === 'SCISSORS'){
    results = 'YOU LOSE';
}
}
else if(MyMove === 'SCISSORS') {
   if (CPUmove === 'ROCK'){
    results = 'YOU LOSE';
}
else if (CPUmove === 'PAPER'){
    results = 'YOU WIN';
}
else if (CPUmove === 'SCISSORS'){
    results = 'TIE'; 
}
}

 if (results === 'YOU WIN') {
     score.wins += 1;
 }
 else if(results === 'YOU LOSE'){
  score.losses += 1;   
 }
 else if(results === 'TIE'){
  score.Ties += 1;
 }
 
/*localStorage.setItem('message', 'hello');*/
 
 
 alert(`YOU PICKED ${MyMove}. COMPUTER PICKED ${CPUmove}.  ${results}. wins : ${score.wins}. losses : ${score.losses}. Ties : ${score.Ties}`); 
}