
let buttonElements = document.querySelectorAll(".drum");
//console.log(buttonElements);

for (let i = 0; i<buttonElements.length; i++){
    buttonElements[i].addEventListener("click", function () {
        // This gives us the identity of the button that triggered the event.
        let audio
        let buttonCLicked = this.innerHTML;
        console.log(buttonCLicked);
        makeSound(buttonCLicked);
        makeAnimations(buttonCLicked);
    })
};

// Create a function to detect a Key that has been pressed
// Use the Keydown eventlistener to detect the key being pressed.
// The event parameter will be used as an argument in the anonymous function, which will log out which key was pressed.
// We can even use event.key to get the specific string character of the key that was pressed

document.addEventListener("keydown", function(event){
    //console.log(event.key)

    let buttonPressed = event.key;
    makeSound(buttonPressed);
    makeAnimations(buttonPressed);
}); 

//Create a function which will be used to make sounds
function makeSound(key){
    switch (key) {
        case "w":
            audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        break;
        case "a":
            audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;    
        case "j":
            audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;  
        case "k":
            audio = new Audio('sounds/crash.mp3');
            audio.play();
            break; 
        case "l":
            audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
    };
}

//Create a function to make animations

function makeAnimations(currentKey){
    let currentEl = document.querySelector("."+ currentKey);
    currentEl.classList.add("pressed");

    setTimeout(function(){
        currentEl.classList.remove("pressed");
    }, 100)

};

