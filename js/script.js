
var clear; // global variable scope

function countDown()
{

    var heading= document.querySelector("#countDown");
    
    var value= parseInt(heading.innerHTML);

    heading.innerHTML= value-1;

    if(parseInt(heading.innerHTML)<=0 )
    {
    
      clearInterval(clear);
      heading.innerHTML="You are out of time!! HAHAHAAH!";
    }

}

var timerButton = document.querySelector("#start");


var endButton = document.querySelector("#end");


timerButton.addEventListener("click",function()
{
  clear= setInterval(countDown, 1000);
  
});


endButton.addEventListener("click",function(){
  clearInterval(clear);
});


//calls a function every x number of seconds
//var clear= setInterval(countDown, 1000);
