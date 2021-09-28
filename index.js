//1
function countToFifty(){
  for(let i=1; i<51; i++){
      console.log(i);
  }
}

//2
function countFromOne(num){
  for(let i=1; i<=num; i++){
      console.log(i);
  }
 
}

//3
function threeAndFiveInFifty(){
  for(let i=1; i<=50; i++){
      if(i%5==0 || i%3==0){
          console.log(i);
      }
  }
}

//4
function threeAndFive(num){
  for(let i=1; i<=num; i++){
      if(i%5==0 || i%3==0){
          console.log(i);
      }
  }
}

//5
function triple(someArray){
    const tripleArray = [];
    for(let i=0; i<someArray.length; i++){
        tripleArray.push(someArray[i]*3);
    }
    
    return tripleArray;
}

countToFifty(); // logs 1-50
countFromOne(20); // logs 1-num
threeAndFiveInFifty() // logs numbers 1-50 divisible by 3 or 5
threeAndFive(30); // logs numbers 1-num divisible by 3 or 5
console.log(triple([1,2,3])) ; // logs [3,6,9]
console.log(triple([5,20,27,36])); //logs [15,60,81,108]