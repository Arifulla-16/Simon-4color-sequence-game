var level=1;
var audio;
var start=0;
var rand_number;

var seq = [];
var seq_count=0;

$(document).on("keypress",(e)=>{
    if(start==0){
        seqence_generator();
    }   
});



function random_gen(){
    var rand=Math.random();
    rand*=4;
    rand=Math.floor(rand)+1;
    console.log(rand);
    return rand;
}

$("#green").click(()=>{
    if(seq[seq_count]!==1){
        press_ani($("#green"));
        game_over();
    }
    else{
        if(seq_count<seq.length-1){
            seq_count++;
        }
        else{
            seq_count=0;
            setTimeout(seqence_generator,1000);
        }
        press_ani($("#green"));
        audio= new Audio("sounds/green.mp3");
        audio.play();
    }
});

$("#red").click(()=>{
    if(seq[seq_count]!==2){
        press_ani($("#red"));
        game_over();
    }
    else{
        if(seq_count<seq.length-1){
            seq_count++;
        }
        else{
            seq_count=0;
            setTimeout(seqence_generator,1000);
        }
        press_ani($("#red"));
        audio= new Audio("sounds/red.mp3");
        audio.play();
    }
});

$("#yellow").click(()=>{
    if(seq[seq_count]!==3){
        press_ani($("#yellow"));
        game_over();
    }
    else{
        if(seq_count<seq.length-1){
            seq_count++;
        }
        else{
            seq_count=0;
            setTimeout(seqence_generator,1000);
        }
        press_ani($("#yellow"));
        audio= new Audio("sounds/yellow.mp3");
        audio.play();
    }
});

$("#blue").click(()=>{
    if(seq[seq_count]!==4){
        press_ani($("#blue"));
        game_over();
    }
    else{
        if(seq_count<seq.length-1){
            seq_count++;
        }
        else{
            seq_count=0;
            setTimeout(seqence_generator,1000);
        }
        press_ani($("#blue"));
        audio= new Audio("sounds/blue.mp3");
        audio.play();
    }
});

function game_over(){
    $("body").css("background-color","red");
    setTimeout(()=>{
        $("body").css("background-color","#011F3F");
    },50);
    seq=[];
    seq_count=0;
    audio= new Audio("sounds/wrong.mp3");
    audio.play();
    $("h1").text("Game Over, Press Any Key to Restart");
    start=0;
}



function press_ani(ele){
    ele.addClass("press");
    setTimeout(()=>{
        ele.removeClass("press");
    },100);
}

function seqence_generator(){
    $("h1").text("Level "+level++);
        rand_number=random_gen();
        seq.push(rand_number);
        console.log(seq);
        switch(rand_number){
            case 1:
                press_ani($("#green"));
                audio= new Audio("sounds/green.mp3");
                audio.play();
                break;
            case 2:
                press_ani($("#red"));
                audio= new Audio("sounds/red.mp3");
                audio.play();
                break;
            case 3:
                press_ani($("#yellow"));
                audio= new Audio("sounds/yellow.mp3");
                audio.play();
                break;
            case 4:
                press_ani($("#blue"));
                audio= new Audio("sounds/blue.mp3");
                audio.play();
                break;
            default:
                console.log(e.key);
        }
        start=1;
}