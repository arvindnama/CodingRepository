let ball;

/*
 * onMouseDown
 * OnMouseMove
 * OnMouseUp
*/
ball.onMouseDown = (e) =>{
  //1. Detach the ball from current parent & tie it to Body
  //2. Subscribe to mouseMove
  //2.a. On Mouse Move: get position of mouse and move the ball to that location.
  //3. Subscribe to MouseUp
  //3.a on Mouse Up , detach from mouse Move . 

  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;
  document.body.appendChild(ball);

  let moveTo = (x,y)=> {
    ball.style.left = x - ball.offsetWidth /2 +'px';
    ball.style.top = y - ball.offsetHeight/2 +'px';
  };
  let onMouseMove = (e)=>moveTo(e.pageX, e.pageY);
  
  document.attachEvent('mouseMove',onMouseMove);
  ball.mouseUp =(e)=>{
   document.removeEventListener('mouseMove',moveTo);
   ball.mouseUp  = null;
  };
};