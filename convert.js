function toCelcius()
{
    var fahrenheit = document.getElementById("temp").value;
    document.getElementById("celcius").innerHTML= "Today is: " + (fahrenheit-32)*(5/9) + " Celsius";
}