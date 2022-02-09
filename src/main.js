
//ui
var play_button;
var reset_button;
var play = false; //boolean to start simulation.

//pendulum properties
var initial_angle;
var armlength;
var angle = 0;
var mass = 0;
var length = 0;
var diameter = 30;

var origin;//origin point of string
var pos;//centre of bob


//world properties
var accelaration = 0; // a = -mg sin(angle)
var velocity = 0;
var damping = 0.998;


const G = -9.8;


function setup(){
    //user inputs
    armlength = document.getElementById('stringLen');
    initial_angle = document.getElementById('startAngle');
    //canvas
    let canv = createCanvas(640,480);
    
    //ui
    run_button = createButton('run');//to start simulation.
    reset_button = createButton('stop & reset');
    //ui controls
    run_button.mousePressed(simulate);
    reset_button.mousePressed(reset);


    //initializing values

    length = 100;
    angle = radians(initial_angle.value);
    mass = 5;

    origin = createVector((width/2),0);
    pos = createVector();

}

function draw(){
    
    background(125);//refreshes background

        length = cm2px(armlength.value);
        //ui outputs
        document.getElementById('lengthVal').innerHTML = armlength.value + "cm";
        document.getElementById('angleVal').innerHTML = initial_angle.value;
        

    //simulating pendulum
    pos.x = origin.x + length*sin(angle);
    pos.y = origin.y + length*cos(angle);    
    if(play){
       

        accelaration = G/mass/length*sin(angle);
        velocity += accelaration;

        angle += velocity;
        velocity *= damping;

    }
     //drawing pendulum
     line(origin.x,origin.y,pos.x,pos.y);
     circle(pos.x,pos.y,diameter);
}

//the simulation only starts if run button is pressed.
function simulate(){
//if not playing
        if(play == false){
            play = true;//starts playing
        }  
}

//to reset simulation
function reset(){
//if playing 
    // if(play == true){
        play = false;//stops playing
        //resets to default values
        length = 100;//30 cm
        document.getElementById('stringLen').value = length *  0.0264583333;//pixel to cm eq: px * cm in 1px;
        angle = Math.PI/4;
        document.getElementById('startAngle').value = degrees(angle);
        mass = 10;

    //}

}

//converts cm to pixels
function cm2px(cm){
    let px = cm * ( 72 / 2.54 ); // equation : pixels = centimeters * ( dpi / 2.54 )
    // console.log(px);
    return px;
}

//sets initial angle based on slider
function set_angle(){
    let new_angle = document.getElementById('startAngle');
    angle = radians(new_angle.value);
}

//reset angle to default
function reset_angle(){
    if(!play){
        document.getElementById('startAngle').value = 45;
        angle = radians(45);
    }
}
