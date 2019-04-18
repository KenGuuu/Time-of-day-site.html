setInterval(function GetTime()
{
    var today = new Date();
    var date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()+' '+time;

    document.title=dateTime;
    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;

}
, 0);

if(document.getElementById("countries").value=="UK")
{
setInterval(function Welcoming()
{
    var d = new Date();
    var h = d.getHours();
    if(h<=12 && h>4)
    {
        document.getElementById("welcome").innerHTML = "Good Morning!";
    }
    else if(h>12 && h<18)
    {
        document.getElementById("welcome").innerHTML = "Good Afternoon!";
    }
    else if(h>=18 && h<21)
    {
        document.getElementById("welcome").innerHTML = "Good Evening";
    }
    else
    {
        document.getElementById("welcome").innerHTML = "You should go to bed!";
    }
}
, 0);
}
else
{
    document.getElementById("welcome").innerHTML = "Working";
}


