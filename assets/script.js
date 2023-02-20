const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
var feedbackElement = document.getElementById("feedback");

emailjs.send('service_tnba52n', 'template_9dcyoxu', templateParams)
  .then(function(response) {
    feedbackElement.innerHTML = "Messaggio inviato con successo!";
  })
  .catch(function(error) {
    feedbackElement.innerHTML = "Si è verificato un errore nell'invio del messaggio: " + error;
  });

