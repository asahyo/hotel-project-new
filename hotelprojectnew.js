//locking room set to true
var isVisible = true;
//get new date, but since computer generates numbers, set each number to the date
var date = new Date();
var m = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var month = m[date.getMonth()];
var w = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var weekday = w[date.getDay()];
var d = new Date();
var date = d.getDate();

//create global variables for each room tha keeps track of how many people are in the room
var i = 0; //room 1
var s = 0; //room 2
var v = 0; //room 3
var t = 0; //room 4
var a = 0; //room 5
var m = 0; //room 6

var newListguest = [];

//ROOM 1

function checkIn(event) {
  if (window.event.keyCode == 13) {
    //create your list
    var newList = document.createElement('li');
    //create list of guestlist
    var newListguest = document.createElement('li');
    //get the value the user inputed
    var guest = document.getElementById('checkin').value;
    //get the value user inputed seperately for guestlist
    var guestlist = document.getElementById('checkin').value;
    //get the date
    var x = document.createTextNode(guest + " - " + month + ", " + weekday + " " + date);
    //get same date but for guestlist
    var xlist = document.createTextNode(guestlist + " - " + month + ", " + weekday + " " + date);
    //append values to lists and guestlist
    newList.appendChild(x);
    newListguest.appendChild(xlist);
    var position = document.getElementById('pos1');
    var list = document.getElementById('guestlist');
    //when user is done with input, clear input box
    document.getElementById('checkin').value = " ";


    ////////////// THIS CODE REMOVES THE GUEST FROM THE ROOM WHEN YOU CLICK ON THEIR NAME///////////////////////
    newList.onclick = function () {
      this.parentNode.removeChild(this);
      i -= 1;
    }
    //////////////////////////////////////////////////////////


    if (i < 4) {
      //make sure user has a input when checking in
      if (guest.length < 1) {
        console.log("please input guest name");
      } else {
        i++;
        position.appendChild(newList);
        list.appendChild(newListguest);
      }

    } else {
      document.getElementById('fullroom').innerHTML = "room is full!!";
    }
  }
}

/*function checkOut(){
  //do i-- to make sure you subtract one from global varible that is counting how many guests are in your room whenever one checks out
  i--;
  var room = document.getElementById('room1');
  var userNum = document.getElementById('checkout').value;
  var y = parseInt(userNum);
  //-1 is so that computer knows the index value
  var child = room.getElementsByTagName('li')[y-1];
  var parent = child.parentNode;
  parent.removeChild(child);
  document.getElementById('checkout').value = "";
  document.getElementById('fullroom').innerHTML = " ";
}*/

/*document.getElementById("pos1").addEventListener("click", function(e) {
  i--;
  var child = e.target;
  child.parentNode.removeChild(child);
  document.getElementById('fullroom').innerHTML = "";
});*/

function clearAll() {
  var room = document.getElementById('room1');
  var x = room.getElementsByTagName('ol');
  for (i = 0; i < x.length; i++) {
    x[i].innerHTML = "";
  }
  i--;
  document.getElementById('fullroom').innerHTML = " ";
}

function lockRoom() {
  //if visible, make it hidden when button is pressed
  if (isVisible == true) {
    document.getElementById('lock').style.visibility = "hidden";
    isVisible = false;
  } else {
    //if hidden, make it visible when button is pressed
    document.getElementById('lock').style.visibility = "visible";
    isVisible = true;
  }
}

//ROOM 2
function checkIn2() {
  if (window.event.keyCode == 13) {
    var newList = document.createElement('li');
    var newListguest = document.createElement('li');
    var guest = document.getElementById('checkin2').value;
    var guestlist = document.getElementById('checkin2').value;
    var x = document.createTextNode(guest + " - " + month + ", " + weekday + " " + date);
    var xlist = document.createTextNode(guestlist + " - " + month + ", " + weekday + " " + date);
    newList.appendChild(x);
    newListguest.appendChild(xlist);
    var position = document.getElementById('pos2');
    var list = document.getElementById('guestlist');
    document.getElementById('checkin2').value = " ";

    newList.onclick = function () {
      this.parentNode.removeChild(this);
      s -= 1;
    }

    if (s < 4) {
      if (guest.length < 1) {
        console.log("please input guest name");
      } else {
        s++;
        position.appendChild(newList);
        list.appendChild(newListguest);
      }
    } else {
      document.getElementById('fullroom2').innerHTML = "room is full!!";
    }
  }

}

function checkOut2() {
  s--;
  var room = document.getElementById('room2');
  var userNum = document.getElementById('checkout2').value;
  var y = parseInt(userNum);
  var child = room.getElementsByTagName('li')[y - 1];
  var parent = child.parentNode;
  parent.removeChild(child);
  document.getElementById('checkout2').value = "";
  document.getElementById('fullroom2').innerHTML = " ";
}

function clearAll2() {
  var room = document.getElementById('room2');
  var x = room.getElementsByTagName('ol');
  for (s = 0; s < x.length; s++) {
    x[s].innerHTML = "";
  }
  s--;
  document.getElementById('fullroom2').innerHTML = " ";
}

function lockRoom2() {
  if (isVisible === true) {
    document.getElementById('lock2').style.visibility = "hidden";
    isVisible = false;
  } else {
    document.getElementById('lock2').style.visibility = "visible";
    isVisible = true;
  }
}

//ROOM 3
function checkIn3() {
  if (window.event.keyCode == 13) {
    var newList = document.createElement('li');
    var newListguest = document.createElement('li');
    var guest = document.getElementById('checkin3').value;
    var guestlist = document.getElementById('checkin3').value;
    var x = document.createTextNode(guest + " - " + month + ", " + weekday + " " + date);
    var xlist = document.createTextNode(guestlist + " - " + month + ", " + weekday + " " + date);
    newList.appendChild(x);
    newListguest.appendChild(xlist);
    var position = document.getElementById('pos3');
    var list = document.getElementById('guestlist');
    document.getElementById('checkin3').value = " ";

    newList.onclick = function () {
      this.parentNode.removeChild(this);
      v -= 1;
    }

    if (v < 4) {
      if (guest.length < 1) {
        console.log("please input guest name");
      } else {
        v++;
        position.appendChild(newList);
        list.appendChild(newListguest);
      }
    } else {
      document.getElementById('fullroom3').innerHTML = "room is full!!";
    }
  }
}

function checkOut3() {
  v--;
  var room = document.getElementById('room3');
  var userNum = document.getElementById('checkout3').value;
  var y = parseInt(userNum);
  var child = room.getElementsByTagName('li')[y - 1];
  var parent = child.parentNode;
  parent.removeChild(child);
  document.getElementById('checkout3').value = "";
  document.getElementById('fullroom3').innerHTML = " ";
}

function clearAll3() {
  var room = document.getElementById('room3');
  var x = room.getElementsByTagName('ol');
  for (v = 0; v < x.length; v++) {
    x[v].innerHTML = "";
  }
  v--;
  document.getElementById('fullroom3').innerHTML = " ";
}

function lockRoom3() {
  if (isVisible === true) {
    document.getElementById('lock3').style.visibility = "hidden";
    isVisible = false;
  } else {
    document.getElementById('lock3').style.visibility = "visible";
    isVisible = true;
  }
}

//ROOM 4
function checkIn4() {
  if (window.event.keyCode == 13) {
    var newList = document.createElement('li');
    var newListguest = document.createElement('li');
    var guest = document.getElementById('checkin4').value;
    var guestlist = document.getElementById('checkin4').value;
    var x = document.createTextNode(guest + " - " + month + ", " + weekday + " " + date);
    var xlist = document.createTextNode(guestlist + " - " + month + ", " + weekday + " " + date);
    newList.appendChild(x);
    newListguest.appendChild(xlist);
    var position = document.getElementById('pos4');
    var list = document.getElementById('guestlist');
    document.getElementById('checkin4').value = " ";

    newList.onclick = function () {
      this.parentNode.removeChild(this);
      t -= 1;
    }

    if (t < 4) {
      if (guest.length < 1) {
        console.log("please input guest name");
      } else {
        t++;
        position.appendChild(newList);
        list.appendChild(newListguest);
      }
    } else {
      document.getElementById('fullroom4').innerHTML = "room is full!!";
    }
  }
}

function checkOut4() {
  t--;
  var room = document.getElementById('room4');
  var userNum = document.getElementById('checkout4').value;
  var y = parseInt(userNum);
  var child = room.getElementsByTagName('li')[y - 1];
  var parent = child.parentNode;
  parent.removeChild(child);
  document.getElementById('checkout4').value = "";
  document.getElementById('fullroom4').innerHTML = " ";
}

function clearAll4() {
  var room = document.getElementById('room4');
  var x = room.getElementsByTagName('ol');
  for (t = 0; t < x.length; t++) {
    x[t].innerHTML = "";
  }
  t--;
  document.getElementById('fullroom4').innerHTML = " ";
}

function lockRoom4() {
  if (isVisible === true) {
    document.getElementById('lock4').style.visibility = "hidden";
    isVisible = false;
  } else {
    document.getElementById('lock4').style.visibility = "visible";
    isVisible = true;
  }
}

//ROOM 5
function checkIn5() {
  if (window.event.keyCode == 13) {
    var newList = document.createElement('li');
    var newListguest = document.createElement('li');
    var guest = document.getElementById('checkin5').value;
    var guestlist = document.getElementById('checkin5').value;
    var x = document.createTextNode(guest + " - " + month + ", " + weekday + " " + date);
    var xlist = document.createTextNode(guestlist + " - " + month + ", " + weekday + " " + date);
    newList.appendChild(x);
    newListguest.appendChild(xlist);
    var position = document.getElementById('pos5');
    var list = document.getElementById('guestlist');
    document.getElementById('checkin5').value = " ";

    newList.onclick = function () {
      this.parentNode.removeChild(this);
      a -= 1;
    }

    if (a < 4) {
      if (guest.length < 1) {
        console.log("please input guest name");
      } else {
        a++;
        position.appendChild(newList);
        list.appendChild(newListguest);
      }
    } else {
      document.getElementById('fullroom5').innerHTML = "room is full!!";
    }
  }
}

function checkOut5() {
  a--;
  var room = document.getElementById('room5');
  var userNum = document.getElementById('checkout5').value;
  var y = parseInt(userNum);
  var child = room.getElementsByTagName('li')[y - 1];
  var parent = child.parentNode;
  parent.removeChild(child);
  document.getElementById('checkout5').value = "";
  document.getElementById('fullroom5').innerHTML = " ";
}

function clearAll5() {
  var room = document.getElementById('room5');
  var x = room.getElementsByTagName('ol');
  for (a = 0; a < x.length; a++) {
    x[a].innerHTML = "";
  }
  a--;
  document.getElementById('fullroom5').innerHTML = " ";
}

function lockRoom5() {
  if (isVisible === true) {
    document.getElementById('lock5').style.visibility = "hidden";
    isVisible = false;
  } else {
    document.getElementById('lock5').style.visibility = "visible";
    isVisible = true;
  }
}

//ROOM 6
function checkIn6() {
  if (window.event.keyCode == 13) {
    var newList = document.createElement('li');
    var newListguest = document.createElement('li');
    var guest = document.getElementById('checkin6').value;
    var guestlist = document.getElementById('checkin6').value;
    var x = document.createTextNode(guest + " - " + month + ", " + weekday + " " + date);
    var xlist = document.createTextNode(guestlist + " - " + month + ", " + weekday + " " + date);
    newList.appendChild(x);
    newListguest.appendChild(xlist);
    var position = document.getElementById('pos6');
    var list = document.getElementById('guestlist');
    document.getElementById('checkin6').value = " ";

    newList.onclick = function () {
      this.parentNode.removeChild(this);
      m -= 1;
    }

    if (m < 4) {
      if (guest.length < 1) {
        console.log("please input guest name");
      } else {
        m++;
        position.appendChild(newList);
        list.appendChild(newListguest);
      }
    } else {
      document.getElementById('fullroom6').innerHTML = "room is full!!";
    }
  }
}

function checkOut6() {
  m--;
  var room = document.getElementById('room6');
  var userNum = document.getElementById('checkout6').value;
  var y = parseInt(userNum);
  var child = room.getElementsByTagName('li')[y - 1];
  var parent = child.parentNode;
  parent.removeChild(child);
  document.getElementById('checkout6').value = "";
  document.getElementById('fullroom6').innerHTML = " ";
}

function clearAll6() {
  var room = document.getElementById('room6');
  var x = room.getElementsByTagName('ol');
  for (m = 0; m < x.length; m++) {
    x[m].innerHTML = "";
  }
  m--;
  document.getElementById('fullroom6').innerHTML = " ";
}

function lockRoom6() {
  if (isVisible === true) {
    document.getElementById('lock6').style.visibility = "hidden";
    isVisible = false;
  } else {
    document.getElementById('lock6').style.visibility = "visible";
    isVisible = true;
  }
}




function guestReport() {
  var guestrep = newListguest.toString();
  window.alert(guestrep)
  localStorage.setItem("everyone", guestrep);
  location.href = "guestreport.html";

  /*gets userinput and sets it as a
  var a = document.getElementById('checkin').value;
  //passes user input value into local storage
  localStorage.setItem("passname", a);
  //sends it to other page
  location.href = "guestreport.html";
  console.log(a);*/
}