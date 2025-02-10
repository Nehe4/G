 .
 


 













function Moves() {
   const No = Math.random();
   let CPUmove ='';
 
 if(No >= 0 && No < 1/3) {
    CPUmove = 'PAPER';
 }else if(No >= 1/3 && No < 2/3) {
    CPUmove = 'PENCIL';
 }else if(No >= 2/3 && No < 1) {
    CPUmove = 'BLADE';
 }
 console.log(CPUmove);
 
 return CPUmove;
}

function playGame() {
    
}
