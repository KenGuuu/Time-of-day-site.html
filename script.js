setInterval(function Welcoming()
{
    var x = document.getElementById("countries").value;
    if(x=="Poland")
    {
    var today = new Date();
    var h = today.getHours();
    var date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()+' '+time;

    document.title=dateTime;
    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;

    if(h<=12 && h>4)
    {
        document.getElementById("welcome").innerHTML = "Dzień dobry!";
    }
    else if(h>12 && h<18)
    {
        document.getElementById("welcome").innerHTML = "Dzień dobry!";
    }
    else if(h>=18 && h<21)
    {
        document.getElementById("welcome").innerHTML = "Dobry wieczór";
    }
    else
    {
        document.getElementById("welcome").innerHTML = "Powinieneś iść do łóżka";
    }
}
else if(x=="UK")
{
var today = new Date();
var h = today.getHours()-1;
var date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
var time = (today.getHours()-1) + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()+' '+time;

document.title=dateTime;
document.getElementById("time").innerHTML = time;
document.getElementById("date").innerHTML = date;

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
    document.getElementById("welcome").innerHTML = "Good Evening!";
}
else
{
    document.getElementById("welcome").innerHTML = "You should go to bed!";
}
}
else if(x=="USA")
{
var today = new Date();
var h = today.getHours()-6;
var date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
var time = (today.getHours()-6) + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()+' '+time;

document.title=dateTime;
document.getElementById("time").innerHTML = time;
document.getElementById("date").innerHTML = date;

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
    document.getElementById("welcome").innerHTML = "Good Evening!";
}
else
{
    document.getElementById("welcome").innerHTML = "You should go to bed!";
}
}
else if(x=="France")
{
var today = new Date();
var h = today.getHours();
var date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()+' '+time;

document.title=dateTime;
document.getElementById("time").innerHTML = time;
document.getElementById("date").innerHTML = date;

if(h<=12 && h>4)
{
    document.getElementById("welcome").innerHTML = "Bonjour!";
}
else if(h>12 && h<18)
{
    document.getElementById("welcome").innerHTML = "Bonjour!";
}
else if(h>=18 && h<21)
{
    document.getElementById("welcome").innerHTML = "Bonsoir!";
}
else
{
    document.getElementById("welcome").innerHTML = "Tu devrais aller te coucher!";
}
}
else if(x=="Germany")
{
var today = new Date();
var h = today.getHours();
var date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()+' '+time;

document.title=dateTime;
document.getElementById("time").innerHTML = time;
document.getElementById("date").innerHTML = date;

if(h<=12 && h>4)
{
    document.getElementById("welcome").innerHTML = "Guten Morgen!";
}
else if(h>12 && h<18)
{
    document.getElementById("welcome").innerHTML = "Guten Tag!";
}
else if(h>=18 && h<21)
{
    document.getElementById("welcome").innerHTML = "Guten Abend!";
}
else
{
    document.getElementById("welcome").innerHTML = "Du solltest ins Bett gehen!";
}
}
else if(x=="Russia")
{
var today = new Date();
var h = today.getHours()+1;
var date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
var time = (today.getHours()+1) + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()+' '+time;

document.title=dateTime;
document.getElementById("time").innerHTML = time;
document.getElementById("date").innerHTML = date;

if(h<=12 && h>4)
{
    document.getElementById("welcome").innerHTML = "доброе утро!";
}
else if(h>12 && h<18)
{
    document.getElementById("welcome").innerHTML = "Добрый день!";
}
else if(h>=18 && h<21)
{
    document.getElementById("welcome").innerHTML = "добрый вечер!";
}
else
{
    document.getElementById("welcome").innerHTML = "Ты должен идти спать!";
}
}
} , 0);

