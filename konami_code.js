document.addEventListener('DOMContentLoaded', event => {
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

  let index = 0
  document.addEventListener('keydown', function(event) {
    if (event.which === code[index]) {
      index++
    } else {
      index = 0
    }
    if (index === code.length) {
      alert('Yes!')
      index = 0
    }
  })
})
