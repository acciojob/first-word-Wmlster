function firstWord(s) {
  // your code here

	let j=-1;

	let n=s.length;

	for(let i=0;i<n;i++)
		{
			if(s[i]!=" ")
			{
				j=i;
				break;
			}
		}

	if(j==-1)
		return s;
    
	let ss1="";

	for(let i=j;i<n;i++)
		{
			if(s[i]==" ") 
			{
				break;
			}
			
			ss1+=s[i];
		}

	return ss1;
	
}

// Do not change the code below 

const s = prompt("Enter String:");
alert(firstWord(s));
