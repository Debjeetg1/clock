function timeshow()
{
    var  TimeHTML = document.getElementById("Time");
   
    var GreetingHTML = document.getElementById('Greeting')

    time = new Date().toLocaleTimeString();
    var hours = 5
    var minutes = time.slice(3,5);
    var seconds = time.slice(6, 8);
    var am_pm = 'AM'

    if(TimeHTML !== null)
    {   

        
    
            
        TimeHTML.innerText = time;    
    }
 
}


   setInterval(timeshow, 1000)


