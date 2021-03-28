

function checkPrimeNumber(number)
{
  
  var num = 0;
  var num2 = 0;
  while(num < number )
  {
    num ++;

    
    if(number % num === 0)
    {
      
      num2 ++
      if(num2 > 2){
        console.log('this is a composite number')
      }
    }
  }
  if(num2 === 2)
  {
    console.log('This is a Prime Number')
  }


 
  
}
checkPrimeNumber(137);


