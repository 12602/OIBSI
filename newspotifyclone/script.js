let masterplay=document.querySelector("#masterplay")
let backward=document.querySelector("#backward");
let forward=document.querySelector("#forward");
let audio=new Audio("/songs/1.mp3");
let progressbar=document.querySelector("#progressbar");
let soundicon=document.querySelector(".soundicon");
let songname=document.querySelector(".songnameinplayingbar");
let songs=
[
  
    {
        songname:'Tu Hi Haqqeqat',
        songIndex:'1',
        songlength:'5:30',
        cover:'/cover/1.jpg',
        path:'/songs/1.mp3'
    },
    {
        songname:'Heer Ranjanha',
        songIndex:'2',
        songlength:'5:30',
        cover:'/cover/2.jpg',
        path:'/songs/2.mp3'
    },
    {
        songname:'Let Me Love You',
        songIndex:'3',
        songlength:'5:30',
        cover:'/cover/3.jpg',
        path:'/songs/3.mp3'
    }
    ,
    {
        songname:'Maafi',
        songIndex:'4',
        songlength:'5:30',
        cover:'/cover/4.jpg',
        path:'/songs/4.mp3'
    },
    {
        songname:'Meri Zindagi Hai tu',
        songIndex:'5',
        songlength:'5:30',
        cover:'/cover/5.jpg',
        path:'/songs/5.mp3'
    },
    {
        songname:'Raatan Lambiyan',
        songIndex:'6',
        songlength:'5:30',
        cover:'/cover/6.jpg',
        path:'/songs/6.mp3'
    },
    {
        songname:'Shape of You',
        songIndex:'7',
        songlength:'5:30',
        cover:'/cover/7.jpg',
        path:'/songs/7.mp3'
    },
    {
        songname:'Meri Jaan Meri Jaan',
        songIndex:'8',
        songlength:'5:30',
        cover:'/cover/4.jpg',
        path:'/songs/11.mp3'
    }
]
masterplay.addEventListener("click",(e)=>
{
 if(audio.paused||audio.currentTime==0)
 {
     audio.currentTime=0;
     audio.play();
     masterplay.classList.remove("fa-circle-play");
     masterplay.classList.add("fa-pause-circle");
     soundicon.classList.add("active");


    
 }
 else
 {
    masterplay.classList.remove("fa-pause-circle");
    masterplay.classList.add("fa-play-circle");
     audio.pause();
     soundicon.classList.remove("active");
    
 }

});
let songIndex=1;

forward.addEventListener("click",(e)=>
{
    
 if(audio.currentTime!=0)
 {
     if(songIndex<9)
     songIndex++;
     else
     {
         songIndex=0;
     }
    audio.src="/songs/"+songIndex+".mp3";
audio.currentTime=0;
     audio.play();
     songname.innerText=songs[songIndex-1].songname;
   
     soundicon.classList.add("active");


 }
 
});
backward.addEventListener("click",(e)=>
{
    if(audio.currentTime!=0)
 {
     if(songIndex<9)
     songIndex--;
     else
     {
         songIndex=0;
     }
    audio.src="/songs/"+songIndex+".mp3";
audio.currentTime=0;
     audio.play();
     songname.innerText=songs[songIndex-1].songname;
     

 }
    
 
});

audio.addEventListener("timeupdate",()=>
{
    
    progress=parseInt((audio.currentTime/audio.duration)*100);
    
  progressbar.value=progress;

});
progressbar.addEventListener("change",()=>
{
    audio.currentTime=(progressbar.value*audio.duration)/100;

})