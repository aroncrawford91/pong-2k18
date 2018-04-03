$('.startGame').on("click",function(){
  $('.startPage').css('background-color', 'transparent')
  $('.kill').css('display', 'none');
})

$(document).ready(() => {
    let value =196;
$(document).on('keydown',() => {
    if(event.key === "ArrowUp"){
        if(value > 0){
        value -=28;
        $('.paddleRight').css('top', `${value}px`);
    }
}
    if(event.key === "ArrowDown"){
        if(value < 391){
        value +=28;
        $('.paddleRight').css('top', `${value}px`);
    }
}
})

let value2 =196
$(document).on('keypress',() => {
    if(event.key === "w"){
        if(value2 > 0){
        value2 -=28;
        $('.paddleLeft').css('top', `${value2}px`);
    }
}
    if(event.key === "s"){
        if(value2 < 391){
        value2 +=28;
        $('.paddleLeft').css('top', `${value2}px`);
    }
}
})

})

let ballX = 431;
let intervalId;

function ballMoveLeft() {
    intervalId = setInterval(function() {

      if( $('.ball').css('left' ) =='500px') {
        ballX += 1;
      }
      else {
        ballX -= 1;
        $('.ball').css('margin-left', `${ballX}px` )
      }
      check();
    }, 2)
}

function ballMoveRight() {
    intervalId = setInterval(function() {

      if( $('.ball').css('left') =='-323px') {
        ballX -= 1;
      }
      else {
        ballX += 1;
        $('.ball').css('margin-left', `${ballX}px` )
      }
      check();
    }, 2)
}

ballMoveLeft();

function check() {
  let padL= $('.paddleLeft')[0].getBoundingClientRect();
  let padR= $('.paddleRight')[0].getBoundingClientRect();
  let pBall = $('.ball')[0].getBoundingClientRect();


  if (padL.x < pBall.x + pBall.width &&
      padL.x + padL.width > pBall.x &&
      padL.y < pBall.y + pBall.height &&
      padL.height + padL.y > pBall.y) {
    clearInterval(intervalId);

    ballMoveRight();
   // }
  }

  if (padR.x < pBall.x + pBall.width &&
      padR.x + padR.width > pBall.x &&
      padR.y < pBall.y + pBall.height &&
      padR.height + padR.y > pBall.y) {

    clearInterval(intervalId);
    ballMoveLeft();


  }

if (pBall.x > 1100){
  alert('Player 1 Won')

}
else if(pBall.x < 230){
  alert('Player 2 Won')
}
}




