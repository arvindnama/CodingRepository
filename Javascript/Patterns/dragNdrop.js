let ball;

/*
 * onMouseDown
 * OnMouseMove
 * OnMouseUp
*/

ball.mouseDown = (e)=>{
  //1. move ball to body 
  //2. subscribe to mouseMove
  //2.a on Mouse Move :
  //2.a.1 move to x,y
  //2.a.2 get the element from dom at position x,y
  //2.a.3 get an element from 2.a.2 with css tag '.dropable'
  //2.a.4 enter (highlight) the element (to indicate ball has entered ball)
  //2.a.5 if there was a we had perviously entered then leave (unhighlight) from previosly entered element. 
  //3. subscribe to mouseUp
  //3.a remove mouseMove.

  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;

  let moveTo=(x,y)=>{
    ball.style.left = x - ball.width/2 +'px';
    ball.style.top = x - ball.height/2 +'px';
  };
  let enterDropable = (e)=>{
    e.style.OrgbackgroundColor  = e.style.backgroundColor;
    e.style.backgroundColor = 'red';
  };
  let leaveDropable = (e)=>{
    e.style.backgroundColor = 'e.style.OrgbackgroundColor';
  };
  let currentDropable = null;
  let mouseMove = (e)=>{
    moveTo(e.pageX , e.pageY);
    // get any top dom element at location.
    ball.style.hidden = true;
    let element = document.getElementFromPoint(e.pageX , e.pageY);
    ball.style.hidden = false;
    if(!element) return;
    let dropable = element.getElementsByClassName('.dropable');
    if(currentDropable !== dropable){
      if(currentDropable){
        leaveDropable(currentDropable);
      }
      if(dropable){
        enterDropable(dropable);
      }
      currentDropable = dropable;
    }
  };
  document.addEventListener('mouseMove',mouseMove);
  ball.mouseUp = (e)=>{
    document.removeEventListener('mouseMove',mouseMove);
    ball.mouseUp = null;
  };
};