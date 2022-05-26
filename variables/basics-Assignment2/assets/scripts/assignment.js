const task3Element = document.getElementById('task-3');

function printText(){
    alert('Hi! How are you?');
}

function printName(name){
    alert('Hi! ' + name);
}

printText();
printName('Madhav');

task3Element.addEventListener('click', printText);

function concatStrings(s1,s2,s3){
    return s1 + s2 + s3;
}

alert(concatStrings('Hi! ', 'How is ', 'Hyderabad'));