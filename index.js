const letters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V",
  "W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
  "t","u","v","w","x","y","z"
];
const numbers = [
  "0","1","2","3","4","5","6","7","8","9"
];
const symbols = [
  "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
  "{","[","}","]",",","|",":",";","<",">",".","?","/"
];

const characters = [
  ...letters,
  ...numbers,
  ...symbols
];


const passwordRange = document.getElementById("passwordRange");
const lengthValue = document.getElementById("lengthValue");
let GeneratedPassword = document.getElementById("RandomPassword");
let GeneratedPassword1 = document.getElementById("RandomPassword1");
let GenerateNewPassword ="";


function getActiveCharacters() {
  let activeChars = [...letters];

  if (numbersCheck.checked) {
    activeChars = activeChars.concat(numbers);
  }

  if (symbolsCheck.checked) {
    activeChars = activeChars.concat(symbols);
  }

  return activeChars;
}


function RandomNumber() {
  GenerateNewPassword = "";
  const activeChars = getActiveCharacters();

  for (let i = 0; i < passwordLength; i++) {
    const random = Math.floor(Math.random() * activeChars.length);
    GenerateNewPassword += activeChars[random];
  }

  return GenerateNewPassword;
}

function RandomNumber1() {
  GenerateNewPassword = "";
  const activeChars = getActiveCharacters();

  for (let i = 0; i < passwordLength; i++) {
    const random = Math.floor(Math.random() * activeChars.length);
    GenerateNewPassword += activeChars[random];
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

//RangePointer

let passwordLength = passwordRange.value;

lengthValue.textContent = passwordLength;

passwordRange.addEventListener("input", () => {
    passwordLength = passwordRange.value;
    lengthValue.textContent = passwordLength;
});

function updateRangeFill(range) {
  const min = range.min;
  const max = range.max;
  const val = range.value;

  const percent = (val - min) / (max - min) * 100;

  range.style.background = `linear-gradient(
    to right,
    #10B981 0%,
    #10B981 ${percent}%,
    #273549 ${percent}%,
    #273549 100%
  )`;
}

updateRangeFill(passwordRange);

passwordRange.addEventListener("input", () => {
  updateRangeFill(passwordRange);
});

