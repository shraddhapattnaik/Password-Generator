const copyButton = document.getElementById("copy-password");
const passwordInput = document.getElementById("password-text");

copyButton.addEventListener('click', (event)=>{
  navigator.clipboard.writeText(passwordInput.value)
  .then(
    ()=>{
      alert("Password copied successfully");
    }
  )
  .catch (
    (error)=>{
      alert("Unable to copy password"+ error);
    }
  )
  .finally(
    ()=>{
      console.log("Thanks");
    }
  )
});

const lengthSlider = document.getElementById("length-slider");
const lengthLabel = document.getElementById("length-label");
const numbersCheckbox = document.getElementById("numbers");
const lettersCheckbox = document.getElementById("letters");
const mixedCheckbox = document.getElementById("mixed");
const punctuationCheckbox = document.getElementById("punctuation");

function generatePassword() {
  const length = parseInt(lengthSlider.value);
  const includeNumbers = numbersCheckbox.checked;
  const includeLetters = lettersCheckbox.checked;
  const includeMixedCase = mixedCheckbox.checked;
  const includePunctuation = punctuationCheckbox.checked;

  let charset = 'abcdefghijklmnopqrstuvwxyz';
  if (includeNumbers) charset += '0123456789';
  if (includeMixedCase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (includePunctuation) charset += '!@#$%^&*()-_=+';
  
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

const genOptions = document.querySelectorAll(".password");
genOptions.forEach((option) => {
  option.addEventListener("change", () => {
    passwordInput.value = generatePassword();
  });
});

lengthLabel.innerText = lengthSlider.value;
lengthSlider.addEventListener("input", () => {
  lengthLabel.innerText = lengthSlider.value;
  passwordInput.value = generatePassword();
});