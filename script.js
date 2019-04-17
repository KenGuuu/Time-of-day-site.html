setInterval(function GetTime()
{
    var today = new Date();
    var date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;
}
, 0);

setInterval(function Welcoming()
{
    var d = new Date();
    var h = d.getHours();
    if(h<=12 && h>4)
    {
        document.getElementById("welcome").innerHTML = "Good Morning!";
        return "Good Morning!";
    }
    else if(h>12 && h<18)
    {
        document.getElementById("welcome").innerHTML = "Good Afternoon!";
        return "Good Afternoon!";
    }
    else if(h>=18 && h<21)
    {
        document.getElementById("welcome").innerHTML = "Good Evening";
        return "Good Evening";
    }
    else
    {
        document.getElementById("welcome").innerHTML = "You should go to bed!";
        return "You should go to bed!";
    }
}
, 0);

