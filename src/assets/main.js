let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(! (answer || attempt)){
    	setHiddenFields();
    }

    if(!validateInput(input.value)){
    	return false;
    }
    	attempt++;
    
    	
}

//implement new functions here
function setHiddenFields()
{
	answer.value = Math.floor(Math.random() * 9999);
	answer.value = answer.value.toString();
	while(answer.value.length < 4){
		answer.value = "0" + answer.value;
	}
	attempt = 0;
}

function setMessage(text){
	document.getElementById('message').innerHTML= text;
}

function validateInput(text){
if(text.length == 4){
	return true;
}
setMessage("Guesses must be exactly 4 characters long.");
return false
}

function getResults(input){
	
}