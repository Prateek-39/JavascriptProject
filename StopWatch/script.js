var Hr = 0;
var Min = 0;
var Sec = 0;
var count = 0;

var flag = false;

function start() {
  flag = true;
  counter();
}

function stop() {
  flag = false;
  // counter();
}

function reset() {
  flag = false;
  Hr = 0;
  Min = 0;
  Sec = 0;
  count = 0;
  document.getElementById("count").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("hr").innerHTML = "00";
}

function counter() {
  if (flag == true) {
    count = count + 1;

    if (count == 100) {
      Sec = Sec + 1;
      count = 0;
    }

    if (count == 100) {
      Min = Min + 1;
      count = 0;
    }

    if (Sec == 60) {
      Min = Min + 1;
      Sec = 0;
    }

    if (Min == 60) {
      Hr = Hr + 1;
      Min = 0;
      Sec = 0;
    }

    var hrstring = Hr;
    var minstring = Min;
    var secstring = Sec;
    var countstring = count;

    if (10 > hrstring) {
      hrstring = "0" + hrstring;
    }
    if (10 > minstring) {
      minstring = "0" + minstring;
    }
    if (10 > secstring) {
      secstring = "0" + secstring;
    }
    if (10 > countstring) {
      countstring = "0" + countstring;
    }

    document.getElementById("count").innerHTML = countstring;
    document.getElementById("sec").innerHTML = secstring;
    document.getElementById("min").innerHTML = minstring;
    document.getElementById("hr").innerHTML = hrstring;

    setTimeout("counter()", 10);
  }
}
