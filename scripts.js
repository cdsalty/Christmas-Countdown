// console.log('sanity check');

//Update Timer:
function updateTimer(){
    // new Date() will create a new date object with the current time where current time = the moment the line ran
    var now = new Date(); //gets current date
    var nowAsTimestamp = now.getTime(); // we convert to a timestamp
    // getTime() can be run against a date Object, and will convert to the # of millsecnds since 1-1-1970
    // console.log(nowAsTimestamp);
    var timeRemaining = timeStamp - nowAsTimestamp;
    // console.log(nowAsTimestamp);
    var seconds = Math.floor((timeRemaining / 1000) % 60);
	var minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
	var hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
	var days = Math.floor((timeRemaining / (1000 * 60 * 60 * 24)) % 7);
	var weeks = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 7));

    // console.log(seconds); testing our seconds and mintues in the console to verify it's working.
    // console.log(minutes);

    // getElementsByClassName always returns an array no matter if there is anything listed inside or Notification.
    document.getElementsByClassName('weeks')[0].innerHTML=weeks;
    // Will use CSS rules to find a match and only get the first onemptied, NOT AN Array
    document.querySelector('.days').innerHTML = days
    document.querySelector('.hours').innerHTML = hours
    document.querySelector('.minutes').innerHTML = minutes
    document.querySelector('.seconds').innerHTML = seconds
}

var endDate = new Date('December 25, 2018');
console.log(endDate);
var timeStamp = endDate.getTime();
console.log(timeStamp);
// setInterval()- we will hand it a function and tell it how many times to run

// setInterval will:
//     1. call the function in arg1
//     2. every arg2 milliseconds
updateTimer();
setInterval(updateTimer,1000);
    // 1000 is in milliseconds