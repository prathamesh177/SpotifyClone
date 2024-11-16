console.log("welcome");
let songindex=0;

let audioelement = new Audio("E:\MUSIC\Khairiyat (Sad) - Chhichhore 320 Kbps.mp3");
let masterplay = document.getElementById('masterplay');
let progressbar =document.getElementById('progressbar');
var x = document.getElementById("myAudio");

function enableLoop() { 
  x.loop = true;
  x.load();
} 

function disableLoop() { 
  x.loop = false;
  x.load();
} 

function checkLoop() { 
  alert(x.loop);
} 
let songs =[
    {songname: "industry baby", filepath:"E:\MUSIC\Khairiyat (Sad) - Chhichhore 320 Kbps.mp3",coverpath:" https://www.quirkybyte.com/wp-content/uploads/2020/06/Khairiyat-Poochho-Mp3-Song-Download.jpg"},
    {songname: "industry baby", filepath:"C:\Users\91832\Downloads\Tujhe Kitna Chahein Aur - Jubin.mp3",coverpath:"https://i.ytimg.com/vi/Hq5OTJdBKQU/maxresdefault.jpg"},
    {songname: "industry baby", filepath:"C:\Users\91832\Downloads\Drishyam 2 - Title Track.mp3",coverpath:"https://m.economictimes.com/thumb/height-450,width-600,imgsize-82242,msid-95622154/drishyam-2-box-office.jpg"},
    {songname: "industry baby", filepath:"C:\Users\91832\Downloads\Feel-My-Love-.mp3",coverpath:"https://cdn.sharechat.com/365e02b8_1629876320547_sc.jpeg"},
    {songname: "industry baby", filepath:"C:\Users\91832\Downloads\Shwasat-Raja-Dhyasat-Raja(PagalWorld).mp3",coverpath:"https://images.tv9marathi.com/wp-content/uploads/2022/02/22192831/Pavankhind.jpg?width=1280&enlarge=true"},
    {songname: "industry baby", filepath:"E:\MUSIC\Industry Baby(PagalWorld.com.se).mp3",coverpath:"https://images.tv9marathi.com/wp-content/uploads/2022/02/22192831/Pavankhind.jpg?width=1280&enlarge=true"},
    {songname: "industry baby", filepath:"C:\Users\91832\Downloads\Darkhaast (Shivaay) 128 Kbps (1).mp3",coverpath:'//i.ytimg.com/vi/LMnJp_dSdnw/maxresdefault.jpg'},
    {songname: "industry baby", filepath:"C:\Users\91832\Downloads\03. Aye Khuda.mp3",coverpath:"https://images.tv9marathi.com/wp-content/uploads/2022/02/22192831/Pavankhind.jpg?width=1280&enlarge=true"},
    {songname: "industry baby", filepath:"C:\Users\91832\Downloads\Hasi (Shreya Ghoshal) Hamari Adhuri Kahani - 320Kbps.mp3",coverpath:"https://images.tv9marathi.com/wp-content/uploads/2022/02/22192831/Pavankhind.jpg?width=1280&enlarge=true"},
    {songname: "industry baby", filepath:"C:\Users\91832\Downloads\Waka Waka - Shakira.mp3",coverpath:"https://images.tv9marathi.com/wp-content/uploads/2022/02/22192831/Pavankhind.jpg?width=1280&enlarge=true"},
    {songname: "industry baby", filepath:"C:\Users\91832\Downloads\Wavin Flag Mp3 Song Download Pagalworld.mp3",coverpath:"https://images.tv9marathi.com/wp-content/uploads/2022/02/22192831/Pavankhind.jpg?width=1280&enlarge=true"},
    {songname: "industry baby", filepath:"C:\Users\91832\Downloads\Shivba Raja - Sher Shivraj.mp3",coverpath:"https://images.tv9marathi.com/wp-content/uploads/2022/02/22192831/Pavankhind.jpg?width=1280&enlarge=true"},
    {songname: "industry baby", filepath:"C:\Users\91832\Downloads\Chandra(PagalWorld) (1).mp3",coverpath:"https://images.tv9marathi.com/wp-content/uploads/2022/02/22192831/Pavankhind.jpg?width=1280&enlarge=true"},
    {songname: "industry baby", filepath:"C:\Users\91832\Downloads\03. Aye Khuda.mp3",coverpath:"https://images.tv9marathi.com/wp-content/uploads/2022/02/22192831/Pavankhind.jpg?width=1280&enlarge=true"},
    {songname: "industry baby", filepath:"C:\Users\91832\Downloads\Man Udhan Varyache - Ajay Atul.mp3",coverpath:"https://images.tv9marathi.com/wp-content/uploads/2022/02/22192831/Pavankhind.jpg?width=1280&enlarge=true"},
    {songname: "industry baby", filepath:"C:\Users\91832\OneDrive\Desktop\song\Pehli Dafa.mp3",coverpath:"https://images.tv9marathi.com/wp-content/uploads/2022/02/22192831/Pavankhind.jpg?width=1280&enlarge=true"},
    {songname: "industry baby", filepath:"C:\Users\91832\OneDrive\Desktop\song\Night-Changes(PagalWorld).mp3",coverpath:"https://images.tv9marathi.com/wp-content/uploads/2022/02/22192831/Pavankhind.jpg?width=1280&enlarge=true"},
    {songname: "industry baby", filepath:"C:\Users\91832\Downloads\Ved Tuza-(PagalWorld.Ink).mp3",coverpath:"https://images.tv9marathi.com/wp-content/uploads/2022/02/22192831/Pavankhind.jpg?width=1280&enlarge=true"},
    
]



masterplay.addEventListener('click' ,()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

    }else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-playes-circle');

    }
})

progressbar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');

})
const audio = new Audio("C:\Users\91832\OneDrive\Desktop\song\Night-Changes(PagalWorld).mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
})
var voice = {
  
    sform : null,
    sfield : null,
    sbtn : null, 
    recog : null, 
    init : function () {
   
      voice.sfrom = document.getElementById("search-form");
      voice.sfield = document.getElementById("search-field");
      voice.sbtn = document.getElementById("search-speech");
   
     
      navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
       
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        voice.recog = new SpeechRecognition();
        voice.recog.lang = "en-US";
        voice.recog.continuous = false;
        voice.recog.interimResults = false;
   
        
        voice.recog.onresult = (evt) => {
          let said = evt.results[0][0].transcript.toLowerCase();
          voice.sfield.value = said;
        
          voice.stop();
        };
   
        voice.recog.onerror = (err) => { console.error(err); };
   

        voice.sbtn.disabled = false;
        voice.stop();
      })
      .catch((err) => {
        console.error(err);
        voice.sbtn.value = "Please enable access and attach microphone.";
      });
    },
   
   
    start : () => {
      voice.recog.start();
      voice.sbtn.onclick = voice.stop;
      voice.sbtn.value = "Speak Now Or Click Again To Cancel";
    },
   
 
    stop : () => {
      voice.recog.stop();
      voice.sbtn.onclick = voice.start;
      voice.sbtn.value = "Press To Speak";
    }
  };
  window.addEventListener("DOMContentLoaded", voice.init);
  const searchForm = document.querySelector("#search-form");
const searchFormInput = searchForm.querySelector("input"); 
const info = document.querySelector(".info");


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if(SpeechRecognition) {
  console.log("Your Browser supports speech Recognition");
  
  const recognition = new SpeechRecognition();
  recognition.continuous = true;


  searchForm.insertAdjacentHTML("beforeend", '<button type="button"><i class="fas fa-microphone"></i></button>');
  searchFormInput.style.paddingRight = "50px";

  const micBtn = searchForm.querySelector("button");
  const micIcon = micBtn.firstElementChild;

  micBtn.addEventListener("click", micBtnClick);
  function micBtnClick() {
    if(micIcon.classList.contains("fa-microphone")) { 
      recognition.start();
    }
    else {
      recognition.stop();
    }
  }

  recognition.addEventListener("start", startSpeechRecognition);
  function startSpeechRecognition() {
    micIcon.classList.remove("fa-microphone");
    micIcon.classList.add("fa-microphone-slash");
    searchFormInput.focus();
    console.log("Voice activated, SPEAK");
  }

  recognition.addEventListener("end", endSpeechRecognition); 
  function endSpeechRecognition() {
    micIcon.classList.remove("fa-microphone-slash");
    micIcon.classList.add("fa-microphone");
    searchFormInput.focus();
    console.log("Speech recognition service disconnected");
  }

  recognition.addEventListener("result", resultOfSpeechRecognition); 
  function resultOfSpeechRecognition(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    
    if(transcript.toLowerCase().trim()==="stop recording") {
      recognition.stop();
    }
    else if(!searchFormInput.value) {
      searchFormInput.value = transcript;
    }
    else {
      if(transcript.toLowerCase().trim()==="go") {
        searchForm.submit();
      }
      else if(transcript.toLowerCase().trim()==="reset input") {
        searchFormInput.value = "";
      }
      else {
        searchFormInput.value = transcript;
      }
    }
   
  }
  
  info.textContent = 'Voice Commands: "stop recording", "reset input", "go"';
  
}
else {
  console.log("Your Browser does not support speech Recognition");
  info.textContent = "Your Browser does not support Speech Recognition";
}
 