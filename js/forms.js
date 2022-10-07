// PARA FORMULARIO CONTACTO

//CAPTUREMOS LA INFORMACION DEL FORM EN CONSOLE LOG

const formName = document.querySelector('#name-input');
const email = document.querySelector('#Email')
const phone = document.querySelector('#Phone')
const messsageForm = document.querySelector('#Message')

const showInfo = (e) =>{
  console.log(formName.value)
  console.log(email.value)
  console.log(phone.value)
  console.log(messsageForm.value)
  e.preventDefault();
  const respuesta = document.querySelector('#respuesta')
  respuesta.innerHTML = `<h4>Gracias por contactarnos ${formName.value}!</br>Pronto te responderemos al correo ${email.value}</h4>`
  
}

addEventListener('submit',showInfo)


