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
function sendEmail() {
    // Ottenere i dati dal form
    let form = document.getElementById("my-form");
    let name = form.elements["Nome"].value;
    let email = form.elements["Email"].value;
    let subject = form.elements["Argomento"].value;
    let message = form.elements["Dettaglio del progetto"].value;

    emailjs.send("service_02y6c1o", "template_181yc5c", {
        from_name: Nome,
        from_email: Email,
        subject: Argomento,
        message: Dettaglio del progetto,
      }).then(
        function(response) {
          console.log("SUCCESS", response);
          alert("Messaggio inviato correttamente!");
        },
        function(error) {
          console.log("FAILED", error);
          alert("Errore nell'invio del messaggio. Riprova più tardi.");
        }
      );
    
      // Resetta il form
      form.reset();
      return false;
    }
  