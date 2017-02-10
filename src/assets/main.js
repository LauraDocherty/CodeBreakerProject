let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(! (answer || attempt)){
    	setHiddenFields();
    }
}

//implement new functions here
function setHiddenFields()
{
	answer = Math.floor(Math.random() * 9999);
	answer = answer.toString();
	while(answer.length < 4){
		answer = "0" + answer;
	}
	attempt = 0;
}

function setMessage(text){
	document.getElementById('message').innerHTML(test);
}