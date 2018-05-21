import { join } from 'lodash'
import './assets/style.css'
import print from './script/print'

function component() {
  var element = document.createElement('div')

  element.innerHTML = join(['Hello', 'didi'], ' ')
  element.classList.add('red')

  return element
}

document.body.appendChild(component())

console.log('1')

setTimeout(function() {
  console.log('2')
  new Promise(function(resolve) {
    console.log('3')
    resolve()
  }).then(function() {
    console.log('4')
  })
})

new Promise(function(resolve) {
  console.log('5')
  resolve()
}).then(function() {
  console.log('6')
})

setTimeout(function() {
  console.log('7')
  new Promise(function(resolve) {
    console.log('8')
    resolve()
  }).then(function() {
    console.log('9')
  })
})
