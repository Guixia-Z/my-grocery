"use strict";
function displayCalendar(e) {
  var t,
    n,
    a,
    d,
    c,
    l,
    o,
    r = new Date(),
    i = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  -1 === e
    ? dateObject.setMonth(dateObject.getMonth() - 1)
    : 1 === e && dateObject.setMonth(dateObject.getMonth() + 1),
    (l = dateObject.getMonth()),
    (o = dateObject.getFullYear()),
    dateObject.setDate(1),
    (n = dateObject.getDay()),
    (c = i[l] + " " + o),
    (document.querySelector("#cal table caption").innerHTML = c),
    (a =
      0 === l || 2 === l || 4 === l || 6 === l || 7 === l || 9 === l || 11 === l
        ? 31
        : 1 === l
        ? o % 4 === 0
          ? o % 100 === 0
            ? o % 400 === 0
              ? 29
              : 28
            : 29
          : 28
        : 30),
    (d = document.getElementsByTagName("td"));
  for (var s = 0; s < d.length; s++)
    (d[s].innerHTML = ""), (d[s].className = "");
  for (var s = n; a + n > s; s++)
    (d[s].innerHTML = dateObject.getDate()),
      (d[s].className = "date"),
      dateObject > r && (d[s].className = "futuredate"),
      (t = dateObject.getDate() + 1),
      dateObject.setDate(t);
  dateObject.setMonth(dateObject.getMonth() - 1),
    (document.getElementById("cal").style.display = "block");
}
function selectDate(e) {
  void 0 === e && (e = window.event);
  var t = e.target || e.srcElement;
  if ("" === t.innerHTML)
    return (doctype.getElementById("cal").style.display = "block"), !1;
  dateObject.setDate(t.innerHTML);
  var n = new Date(),
    a = Date.UTC(n.getFullYear(), n.getMonth(), n.getDate()),
    d = Date.UTC(
      dateObject.getFullYear(),
      dateObject.getMonth(),
      dateObject.getDate()
    );
  return a >= d
    ? ((document.getElementById("cal").style.display = "block"), !1)
    : ((document.getElementById("startDate").value =
        dateObject.toLocaleDateString()),
      hideCalendar(),
      (countdown = setInterval(updateCountdown, 1e3)),
      (document.getElementById("countdownSection").style.display = "block"),
      (ticket.date = dateObject.toLocaleDateString()),
      (document.getElementById("selectedDate").innerHTML = ticket.date),
      void (document.getElementById("dateSection").style.display = "block"));
}
function hideCalendar() {
  document.getElementById("cal").style.display = "none";
}
function prevMo() {
  displayCalendar(-1);
}
function nextMo() {
  displayCalendar(1);
}

function updateCountdown() {
  var e = new Date(),
    t = Date.UTC(
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds()
    ),
    n = Date.UTC(
      dateObject.getFullYear(),
      dateObject.getMonth(),
      dateObject.getDate(),
      19,
      0,
      0
    );
  1e3 > n - t &&
    (clearInterval(countdown),
    (document.getElementById("countdownSection").style.display = "none"));
  var a = Math.floor((n - t) / 864e5);
  document.getElementById("countdown").innerHTML = a;
  var d = (n - t) % 864e5,
    c = Math.floor(d / 36e5);
  10 > c && (c = "0" + c),
    (document.getElementById("countdown").innerHTML += ":" + c);
  var l = d % 36e5,
    o = Math.floor(l / 6e4);
  10 > o && (o = "0" + o),
    (document.getElementById("countdown").innerHTML += ":" + o);
  var r = l % 6e4,
    i = Math.floor(r / 1e3);
  10 > i && (i = "0" + i),
    (document.getElementById("countdown").innerHTML += ":" + i);
}
function registerName() {
  var e,
    t,
    n = document.getElementById("favotiteMeals"),
    a = document.createElement("li");
  (ticket.favotiteMealssOnTicket += 1),
    (e = "fname" + ticket.favotiteMealsOnTicket),
    (ticket.favotiteMeals[e] = document.getElementById("fname").value),
    (a.innerHTML = ticket.favotiteMeals[e]);
  n.appendChild(a),
    (document.getElementById("fname").value = ""),
    (document.getElementById("ticket").style.display = "block"),
    (document.getElementById("recipesSection").style.display = "block"),
    document.getElementById("fname").focus(),
    ticket.calcCost();
}
function createEventListeners() {
  var e = document.getElementById("startDate");
  e.addEventListener
    ? e.addEventListener("click", displayCalendar, !1)
    : e.attachEvent && e.attachEvent("onclick", displayCalendar);
  var t = document.getElementsByTagName("td");
  if (t[0].addEventListener)
    for (var n = 0; n < t.length; n++)
      t[n].addEventListener("click", selectDate, !1);
  else if (t[0].attachEvent)
    for (var n = 0; n < t.length; n++) t[n].attachEvent("onclick", selectDate);
  var a = document.getElementById("close");
  a.addEventListener
    ? a.addEventListener("click", hideCalendar, !1)
    : a.attachEvent && a.attachEvent("onclick", hideCalendar);
  var d = document.getElementById("prev");
  d.addEventListener
    ? d.addEventListener("click", prevMo, !1)
    : d.attachEvent && d.attachEvent("onclick", prevMo);
  var c = document.getElementById("next");
  c.addEventListener
    ? c.addEventListener("click", nextMo, !1)
    : c.attachEvent && c.attachEvent("onclick", nextMo);
  var l = document.getElementById("addName");
  l.addEventListener
    ? l.addEventListener("click", registerName, !1)
    : l.attachEvent && l.attachEvent("onclick", registerName);
}
var dateObject = new Date(),
  countdown,
  ticket = { favotiteMealsOnTicket: 0, favotiteMeals: {}};
window.addEventListener
  ? window.addEventListener("load", createEventListeners, !1)
  : window.attachEvent && window.attachEvent("onload", createEventListeners);
