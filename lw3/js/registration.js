function checkValidEmail(email) {
  var result = email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{1,}\.[a-z]{2,}$/i);
  if (!result){
    alert('Введите валидный e-mail.');
    return false;
  }
  return true;
}