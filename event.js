
function eventfunction() {

    var eventdate = document.getElementById("eventdate")
    var remaining_days = document.getElementById("remaining_days")
    console.log(eventdate.value)

// using new Date function to get mili second from 1-1-1970 till to now 
var d = new Date();
var strt_second = d.getTime()
console.log(strt_second);

// using new Date function to get mili second from 1-1-1970 till to event date 
var event = new Date(eventdate.value);
var event_second = event.getTime()
console.log(event_second);


var diff =  event_second - strt_second; // geting difference in mili second
diff = diff/1000; // converting mili second into second
diff = Math.ceil(diff) //neglecting decimale value
diff = Math.ceil(diff/60); // converting second into minnute
diff = Math.ceil(diff/60); // converting minnute into hours
diff = Math.ceil(diff/24); // conerting hours into days
console.log(diff)

remaining_days.innerText = `${diff} day Left`

}