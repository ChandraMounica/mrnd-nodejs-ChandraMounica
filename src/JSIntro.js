
exports.Sum = function(num1, num2){
	return num1+num2
}

exports.SumOfArray = function(arrayOfNums){
	var sum=0
for(i=0;i<arrayOfNums.length;i++)
{
	sum=sum+arrayOfNums[i];
}
return sum;

}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	/*var obj=null,sum=0;
	var i;
	for(i=0;i<arrayOfNums.length;i++)
	{
		if(typeof(obj.i) == undefined)
		{
			obj.i=arrayOfNums[i];
			sum+=arrayOfNums[i];
		}
		
	}
	return sum;*/
	/*var ascii=[0,0,0,0,0,0,0,0,0,0]
	var i,sum=0;
	for(i=0;i<arrayOfNums.length;i++)
	{
		if(ascii[arrayOfNums[i]]==0)
			ascii[arrayOfNums[i]]+=1;
		
	}
	for(i=0;i<ascii.length;i++)
		sum+=ascii[i]*i;
	return sum;*/
	var i=1,j=0,k=0,sum=arrayOfNums[0],flag=0;
	for(;i<arrayOfNums.length;i++)
	{
		//flag=0;
		for(k=0;k<=j;k++)
		{
			//flag=1;
			if(arrayOfNums[i]==arrayOfNums[k])
				break;			
			
		}
		if(k>j)
		{
			sum+=arrayOfNums[i];
			j++;
		}
	}
	return sum;
	//sort and check with previous value.
}

exports.ReverseString = function(str){
	var i;
	var res=""
	for(i=str.length-1;i>=0;i--)
		res=res+str[i];
	return res;

}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
 var res=[],i,j=0;
 for(i=(arrayOfStrings.length)-1;i>=0;i--)
 {
	 res[j]=arrayOfStrings[i];
	 j++;
 }
 return res;

}