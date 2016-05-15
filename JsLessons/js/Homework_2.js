 function getIndexOfANumberInArray (array,number){
	
	 var index;
	 
	 for(var i =0; i<array.length; i++){
		
		if(array[i]==number){
			index = i;
			break;
	
		}	else {
			
			index = -1;
		} 
	 }
	 
return index; 
	
}; 

function arrayReverse (array){
	
	var reversed= [];
	
	for(var i =array.length-1; i>=0; i--){
		
		reversed.push(array[i]);
		
	}
	
	return reversed;
	
};


function replaceEvenElementsInArray(array, replacement){
	
	for(var i =0; i<array.length; i++){
		
		if(array[i]%2 == 0){
			
			array[i] = replacement;
			
		}
	}
	
	return array;
}


