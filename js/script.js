const errorMessage = document.getElementById('errorMessage')
const errorIcon = document.getElementById('errorIcon')
const button = document.getElementById('send')

button.onclick = () => {
  const emailInput = document.getElementById('emailInput')
  const email = emailInput.value
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if(regex.test(email)) {
    errorMessage.classList.remove('block')
    errorIcon.classList.remove('block')
    
    errorMessage.classList.add('hidden')
    errorIcon.classList.add('hidden') 
  } else {     
    errorMessage.classList.remove('hidden')
    errorIcon.classList.remove('hidden')
    
    errorMessage.classList.add('block')
    errorIcon.classList.add('block')  
  } 
}

