import { join } from 'lodash'
import './assets/style.css'
import print from './script/print'

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button')

  element.innerHTML = join(['Hello', 'webpack'], ' ');
  element.classList.add('red')

  btn.onclick = print;

  element.appendChild(btn)

  return element;
}

document.body.appendChild(component());


// JavaScript 执行机制demo

// console.log(1)

// setTimeout(() => {
//   console.log(2)
// }, 0)

// console.log(3)

// 
setTimeout(function(){
  console.log(1)
});

new Promise(function(resolve){
  console.log(2)
  for(var i = 0; i < 10000; i++){
      i == 99 && resolve();
  }
}).then(function(){
  console.log(3)
});

console.log(4)