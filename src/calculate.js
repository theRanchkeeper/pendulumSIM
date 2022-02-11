var form = document.getElementById('time');
var form_submit = document.getElementById('submit');
//var form_reset = document.getElementById('form_reset');
var stringlen = document.getElementById('stringLen').value;
var count;
var T; //time period
var T2;//time period sqaured 
var result;

//display
var t = document.getElementById('T');
var t2 = document.getElementById('T2');
var result_out = document.getElementById('result');
form_submit.addEventListener('click' , onSubmit);
let display = document.getElementById('output');
display.style.display = 'none';

function onSubmit(){
    count = form.value;
    T = count/20;
    T2 = pow(T, 2);
    result = stringlen/T2;

    showResults();
    display.style.display = 'block';
}

function showResults(){
   t.innerHTML = T + "&nbsp;sec";
   t2.innerHTML = T2 + "&nbsp;sec<sup>2</sup>";
   result_out.innerHTML = result + "&nbsp;cm/sec<sup>2</sup>";
}

form_reset.addEventListener('click' , ()=>{
    console.log('clicked');
    display.style.display = 'none';
})