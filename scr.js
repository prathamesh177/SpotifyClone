var audio=document.getElementById('audio');
var audio=document.getElementById('playPauseBTN');
var count =0;
function playpausse(){
    if(count==0){
        count=1;
        audio.play();

    }else{
        count=0;
        audio.pause();
    }
}
