var ol = 0;
var isPlaying = false;
var circleInterval;

var el = document.getElementById("circle");
var sc = 1;

function circleAnimation(time) {
    ol++;
    sc++;
    el.style.left = ol + "px";
    el.style.width = sc + "px";
    el.style.height = sc + "px";
//    el.style.borderRadius = sc*100 + "px";    // This line helps keep the circle in shape, if border radius is not given it will turn into square.
    circleInterval = requestAnimationFrame(circleAnimation);
}

function mouseClicked(){
    if(isPlaying){
        isPlaying = false;
        document.getElementById("circle").style.backgroundColor = "dimgrey";
        cancelAnimationFrame(circleInterval);
    }else{
        isPlaying = true;
        document.getElementById("circle").style.backgroundColor = "crimson";
        circleInterval = requestAnimationFrame(circleAnimation);
    }
}

document.getElementById("circle").addEventListener("click", mouseClicked);
document.getElementById("circle").style.backgroundColor = "dimgrey";