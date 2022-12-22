var Name = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('password');
var cpassword = document.getElementById('confirmPassword');
var form = document.getElementById('signup');
// var span = document.querySelectorAll('.span');
// console.log(span);


// jis input field pe click kare user , initialy uska border red hona chahiye aur jab wo field valid tarike se fill ho jaye to border green ho jaye. 



function containsNumber(str) {
   return /[0-9]/.test(str); // or we can use \d (regular expression) instead of [0-9]
 }
/* function isBlank(value){
     if(value==""){
         return true;
     }
     else{
         return false;
     }
 }
*/
 function isEmailId(email){
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
 }

 function isPasswordValid(password){
   const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
 }
form.addEventListener('submit',  (event)=>{
  event.preventDefault();
  validate();
});

  const validate =()=> {


  //Name Validating
  var text = Name.value.trim();
  if (text == "") {
    // span[0].innerHTML = "Name can't be empty";
    // span[0].classList.add('error');
    // Name.classList.add('bg');
    setErrorMsg(Name, "Name can't be empty");
  }
  else if (text.length < 3) {
    
    setErrorMsg(Name, "Name is too short");
  }
  else if (!isNaN(parseFloat(text))) {
    
    setErrorMsg(Name, "Name can't be Number");
  }
  else if (containsNumber(text)) {
    
    setErrorMsg(Name, "please enter correct name");
  }
  else {
    // Name.classList.add('success');
    // span[0].innerHTML = "";
    setSuccessMsg(Name);
  }


  //Email Validating
  var emailText = email.value.trim();

  if (emailText == "") {
    
    setErrorMsg(email, "email Can't be empty");
  }
  else if (!isEmailId(emailText)) {
   
    setErrorMsg(email, "please include @ in the gmail address");
    
  }
  // else if(emailText.includes(".")== false){
  //     setErrorMsg(email, "Please include dot (.) in the gmail address");
  // }
  else {
    // email.classList.add('success');
    //   span[1].innerHTML = "";
    setSuccessMsg(email);
  }

  // Password Validating
  var passText = password.value;
  if (passText == "") {

    setErrorMsg(password, "Password cannot be empty.");
    return false;
  }
  else if (!isPasswordValid(passText)) {

    setErrorMsg(password, "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)");
  }
  else {
    // password.classList.add('success');
    // span[2].innerHTML = "";
    setSuccessMsg(password);
  }

  // Confirm Password Validating
  var cpassText = cpassword.value;
  if (cpassText == "") {
    
    setErrorMsg(cpassword, "Password cannot be empty.");

  }
  else if (cpassText !== passText) {
    
    setErrorMsg(cpassword, "Password does not match");
  }
  else {
    // cpassword.classList.add('success');
    // span[3].innerHTML = "";
    setSuccessMsg(cpassword);
  }
}

function setErrorMsg(input , errorMsg){
    var formField = input.parentElement;
    var wrongIcon = formField.querySelector('.wrong');
    var Spans = formField.querySelector('.span');
    var rightIcon = formField.querySelector('.right');
    rightIcon.classList.remove("righticon");
    // console.log(rightIcon);
    wrongIcon.classList.add('wrongicon');
    Spans.classList.add('error');
    Spans.innerText = errorMsg;
}
function setSuccessMsg(input){
  var formField = input.parentElement;
  var Spans = formField.querySelector('.span');
  var wrongIcon = formField.querySelector('.wrong');
  var rightIcon = formField.querySelector('.right');
  wrongIcon.classList.remove("wrongicon");
  rightIcon.classList.add('righticon');
  Spans.innerText ="";
  input.classList.add('success');

}
