let zone = {
  "Edmonton" : -6,
  "Bangladesh": 6,
}

function startTime() {
    const date = new Date();
    let utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
    let timeOffset = -6;
    let today = new Date(utcTime + (3600000 * timeOffset));
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    let current_time = h + ":" + m + ":" + s
    document.getElementById('edmonton-time').innerHTML =  current_time + " on "+ day + '-' + month+ '-'+ year ;
    setTimeout(startTime, 1000);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  startTime()


  function startTimeBD() {
    const date = new Date();
    let utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
    let timeOffset = 6;
    let today = new Date(utcTime + (3600000 * timeOffset));
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    let current_time = h + ":" + m + ":" + s
    document.getElementById('bd-time').innerHTML =  current_time + " on "+ day + '-' + month+ '-'+ year ;
    setTimeout(startTimeBD, 1000);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  startTimeBD()



//------------- Analog clock starts -----------------
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

setInterval(setClock,1000);

function setClock(){
  const currentDate = new Date();
  const secondRatio = currentDate.getSeconds() / 60;
  const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
  const hourRatio = (minuteRatio + currentDate.getHours()) / 12;

  setRotation(secondHand, secondRatio);
  setRotation(minuteHand, minuteRatio);
  setRotation(hourHand, hourRatio);

  console.log(hourRatio)

}

function setRotation(element, rotationRatio){
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()


function show() {
  var x = document.getElementById("analogClock");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 




  