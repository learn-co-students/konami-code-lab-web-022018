const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  // let keys = []
  // //const input = document.querySelector('input')
  // document.addEventListener('keydown', function(e) {
  //   console.log(e.key)
  //   keys.push(e.key)
  //   if (keys.length > 10) {keys.shift}
  // })
  // while (keys != code) {
  // }
  index = 0
  document.addEventListener('keydown', function(e) {
    console.log(Number(e.which || e.detail))
    if (code[index] === Number(e.which) || code[index] === Number(e.detail)) {
      index++
    } else {
      index = 0
    }
    if (index === code.length) {
      alert("CHEAT CODES ACTIVATED")
    }
  })

}
