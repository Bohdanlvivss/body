let TIMEOUT = "00:00:01";
let ADDITIONAL_TIME = "00:00:01";
let END_TIME = "00:00:01";
let SMOKED_CIGARETTE_COUNT = 0;
let ALL_SMOKED_CIGARETTE_COUNT = 0;
let COUNT_OF_DAYS = 0;

let timer2 = TIMEOUT;
let interval;

function startFunc()
{
    let startTime = document.getElementById('startTime'); //початкови час
    let endTime = document.getElementById('endTime'); //кінцевий час
    let cigCount = document.getElementById("cigCount").value; //кількість сигарет
    let intVal = document.getElementById("intVal").value; // збільшувальний інтервал
    if(startTime.value == "" || endTime.value == "" || cigCount == "" || intVal == "") //провірка чи поля заповнені
    {
        alert("Input all required values!");
    }
    else
    { 
        let timer = startTime.value.split(':'); // початковий arr
        let hours = parseInt(timer[0], 10); 
        let minutes = parseInt(timer[1], 10);

        let timer2 = endTime.value.split(':'); // кінцевий arr
        let hours2 = parseInt(timer2[0], 10); 
        let minutes2 = parseInt(timer2[1], 10);

        let generalTime;    //work time
        let newTimeOutInMinutes;

        if (minutes2 >= minutes ) //if have minutes
        {
            generalTime = (minutes2 - minutes);
        } 
        else
        {
            --hours2;
            minutes2 = minutes2 + 60;
            generalTime = (minutes2 - minutes);
        }
        generalTime = generalTime + ( ( hours2 - hours ) * 60 ); // work minute


        newTimeOutInMinutes = Math.floor(generalTime / parseInt(cigCount, 10)); //worktime/count
        let hours3 = Math.floor(newTimeOutInMinutes / 60);  // перевод в години work time
        let minutes3 = newTimeOutInMinutes % 60; //залишок

        hours3 = (hours3 < 0) ? 59 : hours3; //таймер
        minutes3 = (minutes3 < 0) ? 59 : minutes3;

        TIMEOUT = hours3 + ':' + minutes3 + ':00'; //timout timer
        ADDITIONAL_TIME = '00:' + intVal + ':00'; //int
        END_TIME = hours2; //+ ":" + minutes2 + ":00"; //stop smoke

        let today = new Date(); 
        if(hours <= today.getHours()) //  start
        {
            // try to check if we have saded values
            tryToReadAllValuesFromLocalStorage(); //localstorage
            // start our interval timer
            interval = setInterval(myFunc, 1000); //ms one second раз в секунду myfunc
        }
        else
        {
            alert("To early to smoke!");
        }
    }
}


function myFunc() {  //timer
      let timer = timer2.split(':');
      let hours = parseInt(timer[0], 10);
      let minutes = parseInt(timer[1], 10);
      let seconds = parseInt(timer[2], 10);
      --seconds;
      
      minutes = (seconds < 0) ? --minutes : minutes;
      hours = (minutes < 0 ) ? --hours : hours;
      if (hours < 0 && minutes < 0)
      {
             clearInterval(interval);// clear timer
           
             //TODO: Implement full SMS support - it cost money to use
             //for now simple alert will be used
             //sendSMS("Time to smoke!");
             alert("Time to smoke!");
             ++SMOKED_CIGARETTE_COUNT; // загальна кількість smoked sigarettes за день
             ++ALL_SMOKED_CIGARETTE_COUNT; //all
             updateInterval(); //+ int 5min
             timer2 = TIMEOUT; // (timeout)/work hour /count + (int) 
             let today = new Date();
             //let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
             if(today.getHours() < END_TIME) // when stop
             {
                interval = setInterval(myFunc, 1000); //(interval 1s)
             }
             else
             {  
                $('.countdown').html("Today you have smoked " + SMOKED_CIGARETTE_COUNT + " cigarette(s)."); //massege
                ++COUNT_OF_DAYS;  // day count
                saveAllValuesToLocalStorage(); //local storage
             }
      }
      else   // timer on screen
      {      
            seconds = (seconds < 0) ? 59 : seconds;
            seconds = (seconds < 10) ? '0' + seconds : seconds;
            minutes = (minutes < 0) ? 59 : minutes;
            minutes = (minutes < 10) ? '0' + minutes : minutes;
            $('.countdown').html(hours + ':' + minutes + ':' + seconds);
            timer2 = hours + ':' + minutes + ':' + seconds;
      }
    }
// update interval 
 function updateInterval()
 {
    let timer = TIMEOUT.split(':'); //arr час на ксть
    let hours = parseInt(timer[0], 10);
    let minutes = parseInt(timer[1], 10);
    let seconds = parseInt(timer[2], 10);

    let timer2 = ADDITIONAL_TIME.split(':'); //  interval
    let hours2 = parseInt(timer2[0], 10);
    let minutes2 = parseInt(timer2[1], 10);
    let seconds2 = parseInt(timer2[2], 10);

    let newHours = (hours + hours2); //збільшення
    let newMinutes;
    if ((minutes + minutes2) < 59 ) { newMinutes = (minutes + minutes2) } // if >60 + 1 hour and - 60 min
    else { ++newHours; newMinutes = (minutes + minutes2) - 60; }

    let newSeconds;
    if ((seconds + seconds2) < 59 ) { newSeconds = (seconds + seconds2) } //
    else { ++newMinutes; newSeconds = (seconds + seconds2) - 60; }

    TIMEOUT =  newHours+ ":" + newMinutes + ":" + newSeconds;  // newtimeout + int display
 }   

 function statisticFunc()
 {
    document.getElementById("myDialog").showModal(); 
    let SmokedCigAll;
    let CountDays;
    tryToReadAllValuesFromLocalStorage();
    if(isNaN(ALL_SMOKED_CIGARETTE_COUNT) || isNaN(COUNT_OF_DAYS))
    {
        SmokedCigAll = 0;
        CountDays = 0;
    }
    else
    {
        SmokedCigAll = ALL_SMOKED_CIGARETTE_COUNT;
        CountDays = COUNT_OF_DAYS;
    }
    document.getElementById("statisticCigCount").textContent = "Cigarettes Count: " + SmokedCigAll; //dom
    document.getElementById("statisticDaysCount").textContent = "Days: " + CountDays; //dom
 }

 function closeDialog() { 
    document.getElementById("myDialog").close(); //button
  } 

 // saveAllValuesToLocalStorage function saves  ALL_SMOKED_CIGARETTE_COUNT and COUNT_OF_DAYS values to local storage
 function saveAllValuesToLocalStorage()
 {
    localStorage.setItem("ALL_SMOKED_CIGARETTE_COUNT", ALL_SMOKED_CIGARETTE_COUNT);
    localStorage.setItem("COUNT_OF_DAYS", COUNT_OF_DAYS);
 }

 // tryToReadAllValuesFromLocalStorage function reads all data from local storage needed for this page
 function tryToReadAllValuesFromLocalStorage()
 {
    let tempSmokedCig = localStorage.getItem('ALL_SMOKED_CIGARETTE_COUNT');
    let tempCountDays = localStorage.getItem('COUNT_OF_DAYS');
    if(tempSmokedCig != null && tempSmokedCig != "" && !isNaN(tempSmokedCig))
    {
        ALL_SMOKED_CIGARETTE_COUNT = parseInt(tempSmokedCig);
    }
    if(tempCountDays != null && tempCountDays != "" && !isNaN(tempCountDays)) //check
    {
        COUNT_OF_DAYS = parseInt(tempCountDays);
    }
 }

 // Simple way to clear local storage values :)
 // Just press Ctrl + Alt + Y 
 document.onkeyup = function(e) 
 {
    if (e.ctrlKey && e.altKey && e.which == 89) {
        clearValues();
    }
 }

function clearValues()  
{
    localStorage.setItem("ALL_SMOKED_CIGARETTE_COUNT", null);
    localStorage.setItem("COUNT_OF_DAYS", null);
    alert('Your count of cigarettes and days are cleared!');
    location.reload();
}

 // service is not free so we will not use in this particular project
 function sendSMS(msgText)
 {
    let data = JSON.stringify({
        "message": msgText,
        "tpoa": "Sender",
        "recipient": [
          {
            "msisdn": "12015550123"
          },
          {
            "msisdn": "447400123456"
          },
          {
            "msisdn": "5212221234567"
          }
        ]
      });
      
      let xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          console.log(this.responseText);
        }
      });
      
      xhr.open("POST", "https://api.labsmobile.com/json/send");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Authorization", "Basic " + btoa("myusername:mypassword"));
      xhr.setRequestHeader("Cache-Control", "no-cache");
      
      xhr.send(data);
 }

  // STYLE HELPER

  document.querySelector("#startTime").addEventListener("input", clockAnimation);
  document.querySelector("#endTime").addEventListener("input", clockAnimation);
  function clockAnimation (e) {
    const reTime = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
    const time = this.value;
    if (reTime.exec(time)) {
      const minute = Number(time.substring(3,5));
      const hour = Number(time.substring(0,2)) % 12 + (minute / 60);
      this.style.backgroundImage = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='18.5' fill='none' stroke='%23222' stroke-width='3' /><path d='M20,4 20,8 M4,20 8,20 M36,20 32,20 M20,36 20,32' stroke='%23bbb' stroke-width='1' /><circle cx='20' cy='20' r='2' fill='%23222' stroke='%23222' stroke-width='2' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,4 20.5,4 21.5,24.5 Z' fill='%23222' style='transform:rotate(${360 * minute / 60}deg); transform-origin: 50% 50%;' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,8.5 20.5,8.5 21.5,24.5 Z' style='transform:rotate(${360 * hour / 12}deg); transform-origin: 50% 50%;' /></svg>")`;
    }
  }