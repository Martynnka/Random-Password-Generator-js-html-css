const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V",
    "W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
    "t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
    "#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let GeneratedPassword = document.getElementById("RandomPassword");
let GeneratedPassword1 = document.getElementById("RandomPassword1");
let GenerateNewPassword ="";

function RandomNumber ()
{
     GenerateNewPassword = "";
    for(let i = 0; i < 9; i++)
    {
        let random = Math.floor(Math.random()*91);

        GenerateNewPassword += characters[random];
    }   
    return GenerateNewPassword;
}

function RandomNumber1 ()
{
     GenerateNewPassword = "";
    for(let i = 0; i < 9; i++)
    {
        let random = Math.floor(Math.random()*91);

        GenerateNewPassword += characters[random];
    }   
    return GenerateNewPassword;
}
function showpassword()
{
        GeneratedPassword.textContent = RandomNumber();
}

function showpassword1()
{
        GeneratedPassword1.textContent = RandomNumber1();
}

function showpasswords()
{
    showpassword();
    showpassword1();
}


//console.log(RandomNumber())

