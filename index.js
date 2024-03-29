function makeSound(keys){
    switch(keys){
        case 'w': var audio = new Audio("sounds/tom-1.mp3");
        audio.play();

        break;
        case 'a': var audio = new Audio("sounds/tom-2.mp3");
                 audio.play();
        break;
        case 's': var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
        case 'd': var audio = new Audio("sounds/tom-4.mp3");
        audio.play();

        break;
        case 'j': var audio = new Audio("sounds/crash.mp3");
        audio.play();

        break;
        case 'k': var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();

        break;
        case 'l': var audio = new Audio("sounds/snare.mp3");
        audio.play();

        break;
        default: alert("press the right button");
    }
}


function buttonanimation(currentKey){
    var bakchodi = document.querySelector("."+currentKey);
    bakchodi.classList.add("pressed");
    setTimeout(function(){
        bakchodi.classList.remove("pressed");
    },100)
}




var numberofDrumButton = document.querySelectorAll(".drum").length;

for(var i=0;i<numberofDrumButton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonanimation(buttonInnerHTML);
    })
}

// now for key presses
document.addEventListener("keypress",function(){
    var keyHTML = event.key;
    makeSound(keyHTML);
    buttonanimation(keyHTML);
    
})
