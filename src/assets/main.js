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
    }else{
    	attempt.value++;
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
	attempt.valur = 0;
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
	var glyphs = '<div>';
	for(var i =0; i++; i<input.length)
	{
		if(input.charAt(i) == answer.value.charAt(i))
		{
			glyphs = glyphs + '<span class="glyphicon glyphicon-ok"></span>';
		}else 
		{
			var isThere = false;
			for(var j=0; j++; j< input.length )
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
	glyphs = glyphs + '</div>';
	var res = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">' + glyphs;
	document.getElementById('results').innerHTML = res;
}