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
document.getElementById('submit-btn').addEventListener('click', function(event) {
    event.preventDefault();
    // prendi i dati della form
    var templateParams = {
      Nome: document.getElementById('myForm').elements[0].value,
      Email: document.getElementById('myForm').elements[1].value,
      Argomento: document.getElementById('myForm').elements[2].value,
      Dettagli: document.getElementById('myForm').elements[3].value
    };
  
    // invia l'email utilizzando EmailJS
    emailjs.send('service_tnba52n', 'template_9dcyoxu', templateParams)
      .then(function(response) {
        // se l'invio è riuscito, mostra un messaggio di successo
        var feedbackElement = document.getElementById('feedback');
        feedbackElement.innerHTML = 'Messaggio inviato con successo!';
        feedbackElement.classList.add('success');
      }, function(error) {
        // se l'invio è fallito, mostra un messaggio di errore
        var feedbackElement = document.getElementById('feedback');
        feedbackElement.innerHTML = 'Si è verificato un errore nell\'invio del messaggio: ' + error;
        feedbackElement.classList.add('error');
      });
  });
  
