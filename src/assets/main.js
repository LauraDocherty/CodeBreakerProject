let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(! (answer=='' || attempt=='')){
    	setHiddenFields();
    }

    if(!validateInput(input.value)){
    	return false;
    }else{
    	attempt.value++;
	}
	
    if(getResults(input.value))
	{
			setMessage("You Win! :)");
    }
}

//implement new functions here
function setHiddenFields()
{
	answer.value = Math.floor(Math.random() * 9999);
	answer.value = answer.value.toString();
	while(answer.value.length < 4){
		answer.value = "0" + answer.value;
	}
	attempt.value = 0;
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
		var correct = 0;
		var glyphs = '';
	for(i =0; i<input.length; i++)
	{
		if(input.charAt(i) == answer.value.charAt(i))
		{
			glyphs = glyphs + '<span class="glyphicon glyphicon-ok"></span>';
			correct++;
		}else 
		{
			var isThere = false;
			for(j=0; j< input.length; j++)
			{
					if(input.charAt(i) == answer.value.charAt(j))
					{
							glyphs = glyphs + '<span class="glyphicon glyphicon-transfer"></span>';
							isThere = true;
							break;
					}
			}
			if(!isThere)
			{
				glyphs = glyphs + '<span class="glyphicon glyphicon-remove"></span>';	
			}
		}
	}
	glyphs = glyphs + '</div></div>';
	var res = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">' + glyphs;
	document.getElementById('results').innerHTML = res;
	if(correct == 4)
	{
		return true;
	}
	return false;
}