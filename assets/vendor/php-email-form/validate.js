
function getmail(event){
event.preventDefault();
console.log('getmail')
  var templateParams = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject:document.getElementById('subject').value,
    message:document.getElementById('message').value,
  };
  
  emailjs.send('service_gl9w4rk', 'template_3bzn68u', templateParams)
    .then(function(response) {
      document.querySelector('.sent-message').classList.add('d-block');
      document.getElementById('name').value=""
      document.getElementById('email').value=""
      document.getElementById('subject').value=""
      document.getElementById('message').value=""
    }, function(error) {
       document.querySelector('.loading').classList.remove('d-block');
       document.querySelector('.error-message').innerHTML = error;
       console.log('FAILED...', error);
    });

}
