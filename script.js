let randomNumber = Math.floor(Math.random() * 11);

function play() {
  let userNumber = parseInt(document.getElementById("userNumber").value);
  let message;

  if (userNumber > randomNumber) {
    message = "Twój numer jest za duży";
    document.getElementById("message").style.color = "red";
  } else if (userNumber < randomNumber) {
    message = "Twój numer jest za mały";
    document.getElementById("message").style.color = "red";
  } else {
    message = "Gratulacje, to wlasciwa liczba!";
    document.getElementById("message").style.color = "green";
  }

  document.getElementById("message").innerHTML = message;
}

function increment() {
  let number = document.getElementById("userNumber");
  number.value = parseInt(number.value) + 1;
}

function decrement() {
  let number = document.getElementById('userNumber');
  number.value = parseInt(number.value) - 1;
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("minus").addEventListener("click", decrement);
  document.getElementById("plus").addEventListener("click", increment);
});
