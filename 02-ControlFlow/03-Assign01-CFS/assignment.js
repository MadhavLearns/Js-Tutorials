const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

//Task#1

randomNumber > 0.7 ? alert("Yes greater than 0.7") : "";

//Task#2

const numbersArray = [1, 2, 3, 4, 5];

//for loop
for(let i = 0; i < numbersArray.length; i++){
    console.log(numbersArray[i]);
}

//while loop
let i = 0;
while(i < numbersArray.length){
    console.log(numbersArray[i]);
    i++;
}

//Task#3

//while loop
let j = numbersArray.length - 1;
while(j >= 0){
    console.log(numbersArray[j]);
    j--;
}

//Task#4
const newRandomNumber = Math.random();

if(randomNumber > 0.7 && newRandomNumber > 0.7){
    alert('Both are greater than 0.7');
}else if(randomNumber < 0.2 || newRandomNumber < 0.2){
    alert('one of the number is not greater than 0.2');
}