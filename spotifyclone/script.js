let audioElement =new Audio("/songs/1.mp3");
let songIndex=1;
let songInfo=document.querySelector(".songplay");

let  masterplay=document.getElementById("masterplay");
let myProgressBar=document.getElementById("myprogressbar");
let range=document.getElementById("range");
let gif=document.getElementById("gif");
let songItemPlay=Array.from(document.getElementsByClassName("songitemplay"));
document.getElementById("previous").addEventListener("click",()=>
{
    if(songIndex>9)
    {
        songIndex=1;
    }
    else
    songIndex--;
    audioElement.src="/songs/"+songIndex+".mp3";
audioElement.currentTime=0;
songInfo.innerText=songs[songIndex-1].songName;
audioElement.play();
})
document.getElementById("next").addEventListener("click",()=>
{
    if(songIndex>9)
    {
        songIndex=1;
    }
    else
    songIndex++;
 console.log(songIndex); 
songInfo.innerText=songs[songIndex-1].songName;
audioElement.src="/songs/"+songIndex+".mp3";
audioElement.currentTime=0;
audioElement.play();
})


songItemPlay.forEach((element,index)=>
{

    element.addEventListener("click",e=>
    {
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        console.log(index);
e.target.classList.remove("fa-play-circle");
e.target.classList.add("fa-pause-circle");
audioElement.src="/songs/"+songIndex+".mp3";
audioElement.currentTime=0;
songIndex++;

console.log(songInfo.innerText);
songInfo.innerText=songs[index].songName;
audioElement.play();




    });
});
let str="";
songItemPlay.forEach((element,index)=>
{

    element.addEventListener("click",(e)=>
    {
       
         if(str==='Jatin')
        {
            console.log(e.nodeValue);
            audioElement.pause();
        audioElement.currentTime=0;
            masterplay.classList.remove("fa-pause-circle");
            masterplay.classList.add("fa-play-circle");
        console.log(songItemPlay);
            gif.style.opacity=0;
            console.log("jatin");
            str="";
        
        }
        else if(audioElement.paused||audioElement.currentTime<=0)
        {
        audioElement.play();
            masterplay.classList.remove("fa-play-circle");
            masterplay.classList.add("fa-pause-circle");
            gif.style.opacity=1;
            console.log("kunal")
        str="Jatin";
        }
    });
});  
const makeAllPlays=()=>
{
    songItemPlay.forEach((element,index)=>
{

    element.addEventListener("click",e=>
    {
        e.target.classList.remove("fa-play-circle");
   e.target.classList.add("fa-pause-circle");
    });
});

}
let songs=[

    {
        songName:'Tu hi Haqqeqat',
        filePath:"/songs/1.mp3",
        cover:"/cover/1.jpg",
        length:"3:00"
    },
    {
        songName:'Tum Mile',
        filePath:"/songs/2.mp3",
        cover:"/cover/2.jpg",
        length:"3:00"
    },
    {
        songName:'Let me Love you',
        filePath:"/songs/3.mp3",
        cover:"/cover/3.jpg",
        length:"5:00"
    },
    {
        songName:'Maafi',
        filePath:"/songs/4.mp3",
        cover:"/cover/4.jpg",
        length:"3:00"
    },
    {
        songName:'Meri Zindagi hai Tu',
        filePath:"/songs/5.mp3",
        cover:"/cover/5.jpg",
        length:"3:00"
    },
    {
        length:"3:00",
        songName:'Rattan Lambiyan',
        filePath:"/songs6.mp3",
        cover:"/cover/6.jpg"
    },
    {
        songName:'Shape of You',
        filePath:"/songs/7.mp3",
        cover:"/cover/7.jpg",
        length:"4:00"
    },
    {
        songName:'Darkhast',
        filePath:"/songs/8.mp3",
        cover:"/cover/8.jpg",
        length:"5:00"
    },
    ]





let songItem=   Array.from( document.getElementsByClassName("songitem"));
songItem.forEach((element,index) => {
    
    element.getElementsByTagName("img")[0].src=songs[index].cover;
    element.getElementsByClassName("songname")[0].innerText=songs[index].songName;
    element.getElementsByClassName("songlistplay")[0].innerText=songs[index].length;
});

//handles play 
masterplay.addEventListener("click",(e)=>
{
if(audioElement.paused||audioElement.currentTime<=0)
{
    audioElement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    gif.style.opacity=1;

}
else
{
    audioElement.pause();
    masterplay.classList.remove("fa-pause-circle");
    masterplay.classList.add("fa-play-circle");
    gif.style.opacity=0;
                 
}
});

//listen to event
audioElement.addEventListener("timeupdate",()=>
{
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
  range.value=progress;

});
range.addEventListener("change",()=>
{
    audioElement.currentTime=(range.value*audioElement.duration)/100;

})