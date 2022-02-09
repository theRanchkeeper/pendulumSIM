var mins = 0;
var sec = 0;
var toggle = false;
//display
var sec_display = document.getElementById('seconds');
var mins_display = document.getElementById('minutes');
//buttons
var start_btn = document.getElementById('start');
var stop_btn = document.getElementById('stop');
var reset_btn = document.getElementById('reset');

var timeout;//aliasis for setInterval

function start(){
    sec++;
    if(sec>59){
        mins++;
        if(mins <= 9){
            mins_display.innerHTML = '0'+mins;
        }
        
        if(mins >9){
            mins_display.innerHTML = mins;
        }
        sec = 0;
        sec_display.innerHTML = '0'+sec;
    }
    if(sec<=9){
        sec_display.innerHTML = '0'+sec;
    }
    if(sec > 9){
        sec_display.innerHTML = sec;
    }
}

//stopwatch starts
start_btn.addEventListener('click' , () =>{
    if(toggle == false){
        toggle = true;
        timeout = setInterval(start,1000);
    }
});

//stopwatch stops
stop_btn.addEventListener('click' , ()=>{

    if(toggle == true){
        toggle = false;
        clearInterval(timeout);
    }
});
//reset stopwatch
reset_btn.addEventListener('click' , ()=>{

        mins = 0;
        sec = 0;
        sec_display.innerHTML = '00';
        mins_display.innerHTML = '00';
        toggle = false;
});

