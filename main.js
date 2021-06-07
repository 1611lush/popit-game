(function(){

  let body = document.querySelector("body");
  let outer = document.querySelector('.outer');
  let input = document.querySelectorAll("input");

  const soundDown = new Audio('pop.mp3');
  const soundUp = new Audio('pop2.mp3');


  function ready() {

    function createInner(color){
      let e = document.createElement('div');
      e.className = color;
      for (let i = 0; i < 6; i++) {
          let inner = document.createElement('div');
          let checkbox = '<input id='+color+i+' type="checkbox" name='+color+i+' checked><label for='+color+i+'></label>';
          inner.innerHTML = checkbox;
          e.append(inner);
      }
      outer.appendChild(e);
    }

    createInner('red');
    createInner('orange');
    createInner('yellow');
    createInner('green');
    createInner('blue');
    createInner('purple');
  }
  document.addEventListener("DOMContentLoaded", ready);



  function onPopClick(e) {
    let target = e.target;
     if (target.tagName === "LABEL") {  
      let checkbox = target.parentElement.querySelector('input');
      let isChecked = checkbox.checked;
      if (!isChecked) {
        target.classList.add('checked');
        soundUp.play();
      } else {
        target.classList.remove('checked');
        soundDown.play();
      }
    }   
  }
  body.addEventListener('mousedown', onPopClick);
  body.addEventListener('touchstart', onPopClick);



})()