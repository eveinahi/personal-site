console.log("hello world")


const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit')

form.addEventListener('submit', (e) => {
  submitButton.disabled = true
  e.preventDefault()
  window.location.href = window.location.origin + '/success.html'
})

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}