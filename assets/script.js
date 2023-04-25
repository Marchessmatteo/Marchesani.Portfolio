(function(){
    emailjs.init("Y2T1vZ5uXHo1PLXJZ");
  })();


document.getElementById('submit-btn').addEventListener('click', function(event) {
event.preventDefault();
// prendi i dati della form
var nome = document.getElementById('myForm').elements[0].value.trim();
var email = document.getElementById('myForm').elements[1].value.trim();
var argomento = document.getElementById('myForm').elements[2].value.trim();
var dettagli = document.getElementById('myForm').elements[3].value.trim();

// verifica che i campi non siano vuoti o contengano solo spazi o caratteri speciali
if (nome === '' || !/^[a-zA-Z\s]+$/.test(nome)) {
  document.getElementById('feedback').innerHTML = "Inserisci un nome valido";
  document.getElementById('feedback').classList.add('error');
  return;
}
if (email === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  document.getElementById('feedback').innerHTML = "Inserisci un'email valida";
  document.getElementById('feedback').classList.add('error');
  return;
}
if (argomento === '' || !/^[a-zA-Z\s]+$/.test(argomento)) {
  document.getElementById('feedback').innerHTML = "Inserisci un argomento valido";
  document.getElementById('feedback').classList.add('error');
  return;
}
if (dettagli === '' || !/^[[A-Za-zÀ-ÖØ-öø-ÿ\s,.]+$/.test(dettagli)) {
  document.getElementById('feedback').innerHTML = "Inserisci dei dettagli validi";
  document.getElementById('feedback').classList.add('error');
  return;
}

var templateParams = {
  Nome: nome,
  Email: email,
  Argomento: argomento,
  Dettagli: dettagli
};

emailjs.send('service_tnba52n', 'template_9dcyoxu', templateParams)
  .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    document.getElementById('feedback').innerHTML = "Email inviata con successo";
    document.getElementById('feedback').classList.add('success');
    document.getElementById('myForm').reset(); // aggiungi questa riga
  }, function(error) {
    console.log('FAILED...', error);
    document.getElementById('feedback').innerHTML = "Errore nell'invio dell'email";
    document.getElementById('feedback').classList.add('error');
  });
});



  
