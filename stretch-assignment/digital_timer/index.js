var hundredth = 0;
var tenth = 0;
var one = 0;
var ten = 0;

function timer() {
  setTimeout("Incriment()", 10);
}

function Decrement() {
  if (document.getElementById) {
    hundredth = document.getElementById("msTens");
    thenth = document.getElementById("msHundreds");
    one = document.getElementById("secondOnes");
    ten = document.getElementById("secondTens");

    //if less than a minute remaining
    //Display only seconds value.
    if (seconds < 59) {
      seconds.value = secs;
    }

    //Display both minutes and seconds
    //getminutes and getseconds is used to
    //get minutes and seconds
    else {
      minutes.value = getminutes();
      seconds.value = getseconds();
    }
    //when less than a minute remaining
    //colour of the minutes and seconds
    //changes to red
    if (mins < 1) {
      minutes.style.color = "red";
      seconds.style.color = "red";
    }
    //if seconds becomes zero,
    //then page alert time up
    if (mins < 0) {
      alert("time up");
      minutes.value = 0;
      seconds.value = 0;
    }
    //if seconds > 0 then seconds is decremented
    else {
      secs--;
      setTimeout("Increment()", 100);
    }
  }
}
