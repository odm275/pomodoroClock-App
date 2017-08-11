function Pomodoro(){
  this.break = 5;//Standard braekTime in seconds;
  this.work = 25;//Standard workTime in seconds;
}

var pomodoro = new Pomodoro();
/*DOM */
var timerMinute;//display MINUTES DOM
var timerSecond;//display SECONDS DOM
var workt;//DOM for work
var breakt;//DOM for break

var seconds = 60;
var time = false; //time is not running at first
var interval;//Create variable that holds timecount function;

var boolWork = true;//Working Timer;

var originalWork = pomodoro.work;
var originalBreak = pomodoro.break;

function setup() {
  noCanvas();
  background(0);
  workt = createP('Work Time');
  breakt = createP('Break Time');
  /*addwork,minuswork,addbreak,minusbreak,doTimer will be called multiple times for each buttonpress*/

  buttonaddWork = createButton('+');
  buttonaddWork.mousePressed(addwork);

  buttonminusWork = createButton('-');
  buttonminusWork.mousePressed(minuswork);

  buttonaddBreak = createButton('+');
  buttonaddBreak.mousePressed(addbreak);

  buttonminusBreak = createButton('-');
  buttonminusBreak.mousePressed(minusbreak);

  timerMinute = createP('timerMinute');
  timerSecond = createP('timerSecond');

  button = createButton('Start Timer');
  button.mousePressed(doTimer);//time can be true or false;
  style();

}
/*Styling*/
function style(){
  workt.parent('displayWork');
  breakt.parent('displayBreak');
  buttonaddWork.parent('addWork');
  buttonminusWork.parent('minusWork');
  buttonaddBreak.parent('addBreak');
  buttonminusBreak.parent('minusBreak');
  timerMinute.parent('minutes');
  timerSecond.parent('seconds');
  button.parent('button');
}

/*Adjust settings*/
function addwork(){
  pomodoro.work++;
  originalWork = pomodoro.work;
  workt.html(pomodoro.work);
}
function minuswork(){
  pomodoro.work--;
  originalWork = pomodoro.work;
  workt.html(pomodoro.work);
}
function addbreak(){
  pomodoro.break++;
  originalBreak = pomodoro.break;
  breakt.html(pomodoro.break);
}
function minusbreak(){
  pomodoro.break--;
  originalBreak = pomodoro.break;
  breakt.html(pomodoro.break);
}
/*Run timer*/
function doTimer(){

  if(time===false){//if timer is not running
    interval = setInterval(timeIt,1000);//execute every second;
    time = true;
    button.html('Stop timer');
  }else if(time===true){//if timer is running
    clearInterval(interval);
    time = false;
    button.html('Start timer');
  }
}
/*function that explicitly defines time*/
function timeIt(){
  seconds--;
  minutes();
function minutes(){
  if(seconds===0){
      seconds = 60;
      if(boolWork){
        pomodoro.work--;
      }else{
        pomodoro.break--;
      }
    }
  }
  function reset(){
    pomodoro.break = originalBreak;
    pomodoro.work = originalWork;
  }
  if(pomodoro.work===0){
    boolWork = false;
    reset();
  }else if(pomodoro.break===0){
    boolWork = true;
    reset();
  }
  if(boolWork){
    console.log('WorkTime');
    timerMinute.html(pomodoro.work);
  }else{
    console.log('BreakTime');
    timerMinute.html(pomodoro.break);
  }
  timerSecond.html(seconds);
}
