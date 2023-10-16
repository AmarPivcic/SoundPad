function playAudio(source)
{
    var audio = new Audio(source);
    audio.play();   
}

function switchCase(element)
{
    switch (element) {
        case "6":
            playAudio("./sounds/chant.wav");
            break;
        
        case "7":
            playAudio("./sounds/malt.wav");
            break;

        case "8":
            playAudio("./sounds/snap.wav");
            break;
        
        case "9":
            playAudio("./sounds/blip.wav");
            break;

        case "z": case "Z":
            playAudio("./sounds/knock.wav");
            break;
        
        case "u": case "U":
            playAudio("./sounds/deep.wav");
            break;
        
        case "i": case "I":
            playAudio("./sounds/hihatopen.wav");
            break;
            
        case "o": case "O":
            playAudio("./sounds/ting.wav");
            break;

        case "g": case "G":
            playAudio("./sounds/snapdry.wav");
            break;
        
        case "h": case "H":
            playAudio("./sounds/basslow.wav");
            break;

        case "j": case "J":
            playAudio("./sounds/hihatclosed.wav");
            break;
        
        case "k": case"K":
            playAudio("./sounds/tom.mp3");
            break;

        case "v": case"V":
            playAudio("./sounds/bass.wav");
            break;
        
        case "b": case "B":
            playAudio("./sounds/rim.wav");
            break;
        
        case "n": case "N":
            playAudio("./sounds/snare.wav");
            break;
            
        case "m": case "M":
            playAudio("./sounds/clap.wav");
            break;
            
        default:
            break;
    }
}

function buttonAnimation(button)
{
    var activeButton = $("."+button);
    activeButton.addClass("pressed");
    setTimeout(() => {
        activeButton.removeClass("pressed");
    }, 200);
}

$(".key").click(function () {
    var element = $(this);
    var text = element.children("h3").first().text();
    switchCase(text);
    buttonAnimation(text);
})

document.addEventListener("keydown", function(event){
    if(event.repeat)
    {
        return;
    }
    switchCase(event.key);
    buttonAnimation(event.key);
})