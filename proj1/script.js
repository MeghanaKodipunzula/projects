var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTslaAuoM3tYthMguGEKfDw5COjt1lDQViM7sk8KJwd0P8y0VGY&s.jpg";

  var timeEventJS = document.getElementById("timeEvent");
  var barbieImageJS = document.getElementById('barbieImage');
  
  if (time == partytime)
  {
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEzqMof0loBBPI-xQyD__806qmuKYw0j7at0DUEKiiU0Clx5cl&s.jpg";
    messageText = "Let's party!";
  }
  else if (time == wakeuptime)
  {
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTustHKJ9pCrMeEcQzWhPfZXq4njf4uB_t5kobo1s0bIM9KGH1ToQ&s.jpg";
    messageText = "Wake up!";
  }
  else if (time == lunchtime)
  {
    image = "data:image/jpeg;base64,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.jpg";
    messageText = "Let's have some lunch!";
  }
  else if (time == naptime)
  {
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURYGvKqDXQz9iwjkZ03KIL7-pHqVuXL2jlM29s8p2Bu8lWMpW&s.jpg";
    messageText = "Sleep tight!";
  }
  else if (time < noon)
  {
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTslaAuoM3tYthMguGEKfDw5COjt1lDQViM7sk8KJwd0P8y0VGY&s.jpg";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYKJxeNhr9k98YJg7sfQF0M5rGV2PSvm9f_87P23D52gAVuZNxxQ&s.jpg";
    messageText = "Good evening!";
  }
  else
  {
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGeOP1pUJoez8CDnNGFE339a_M2I08BfpA8MShL8WREBisXsNDqQ&s.jpg";
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  barbieImage.src = image;
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);