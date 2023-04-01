const scriptURL = 'https://script.google.com/macros/s/AKfycbyqQ1eOKvGSBui4OxDl3_rtm76t_NdQEMCKjpP3lgbZSSpivkGMsXqjDA9FPthjBZT2xA/exec'
const form = document.forms['submit-to-google-sheet']
const message = document.getElementById("message")
          
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        message.innerHTML ="Message sent Successfully"
            setTimeout(function(){
            message.innerHTML =""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})