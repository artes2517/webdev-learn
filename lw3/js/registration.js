function checkValidEmail() {
  var email = document.getElementsByClassName("registration__login")[0].value;
  var result = email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{1,}\.[a-z]{2,}$/i);
  if (!result){
    return false;
  }
  return true;
}

function checkPassword() {
  var pass = document.getElementsByClassName("registration__password")[0].value; 
  var passConfirm = document.getElementsByClassName("registration__password-repeat")[0].value;
  if ((pass.length < 6) || (pass != passConfirm)) {
    return false;  
  }
  return true;
}