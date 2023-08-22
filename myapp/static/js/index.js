
var startTime =0

var interval;


function startTimer(){

    startTime = new Date().getTime()
    interval = requestAnimationFrame(updateTimer)


}


function updateTimer(){

    currentTime = new Date().getTime()

  

    elapsedTime = currentTime-startTime

    hour = Math.floor(elapsedTime/3600000)

    minutes = Math.floor((elapsedTime%3600000)/60000);
    seconds = Math.floor((elapsedTime%60000)/1000);
    milliseconds = elapsedTime%1000;
    
    $("#timer").text(

        (hour<10?"0":"")+hour+":"+

        (minutes<10 ? "0":"")+minutes+":"+
        (seconds<10?"0":"")+seconds+"."+
        (milliseconds<100?"0":"")+(milliseconds<10?"0":"")+milliseconds
        
    );

    interval = requestAnimationFrame(updateTimer)

}






function stopTimer(){

cancelAnimationFrame(interval)
}

function resetTimer(){

    cancelAnimationFrame(interval)

    $("#timer").text(
        "00:00:00.000"
    )
}