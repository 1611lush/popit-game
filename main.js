(function(){

  let body = document.querySelector("body");
  let outer = document.querySelector('.outer');


  function ready() {

    function createInner(color){
      let e = document.createElement('div');
      e.className = color;

      for (let i = 0; i < 6; i++) {
          let inner = document.createElement('div');
          let checkbox = '<input id='+color+i+' type="checkbox" name='+color+i+'><label for='+color+i+'></label>';
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




})()