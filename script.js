console.log("Welcome to my Surah player")

let surahIndex=1;
let audioElement=new Audio('surah/1.mp3');
let masterPlay= document.getElementById('masterPlay')
let myProgressBar= document.getElementById('myProgressBar'); 
let gif= document.getElementById('gif'); 
let surahDetails= Array.from(document.getElementsByClassName('surahItem'));
let dispName= document.getElementById('dispName');


let surah=[
    {surahName: "Surah-Al-Fatiha", filePath: "surah/1.mp3", coverPath: "cover/1.jpg"},
    {surahName: "Surah-Al-Fil", filePath: "surah/2.mp3", coverPath: "cover/1.jpg"},
    {surahName: "Surah-Al-Kuraish", filePath: "surah/3.mp3", coverPath: "cover/1.jpg"},
    {surahName: "Surah-Al-Ma'un", filePath: "surah/4.mp3", coverPath: "cover/1.jpg"},
    {surahName: "Surah-Al-Kaothar", filePath: "surah/5.mp3", coverPath: "cover/1.jpg"},
    {surahName: "Surah-Al-Kafirun", filePath: "surah/6.mp3", coverPath: "cover/1.jpg"},
    {surahName: "Surah-Al-Nasr", filePath: "surah/7.mp3", coverPath: "cover/1.jpg"},
    {surahName: "Surah-Al-Lahab", filePath: "surah/8.mp3", coverPath: "cover/1.jpg"},
    {surahName: "Surah-Al-Ikhlas", filePath: "surah/9.mp3", coverPath: "cover/1.jpg"},  
    {surahName: "Surah-Al-Falaq", filePath: "surah/10.mp3", coverPath: "cover/1.jpg"},
    {surahName: "Surah-An-Nas", filePath: "surah/11.mp3", coverPath: "cover/1.jpg"},

]
surahDetails.forEach((element,i) => {
    //console.log(element, i);
    element.getElementsByTagName("img")[0].src= surah[i].coverPath;
    element.getElementsByClassName("surahName")[0].innerText= surah[i].surahName;
    //element.getElementsByClassName("timeStamp")[0].innerText=surah[i].duration;
});

//audioElement.play();
//handle play pasue click
masterPlay.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
   // console.log('bjtise');
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
  }  
  else{
    audioElement.pause();
    //console.log('bondho');
    masterPlay.classList.add('fa-play-circle');
    masterPlay.classList.remove('fa-pause-circle');
    gif.style.opacity=0;
  }
})

//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    //console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    //console.log(progress);
    myProgressBar.value= progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
  Array.from(document.getElementsByClassName('surahList')).forEach((element)=>{
      element.classList.remove('fa-pause-circle');
      element.classList.add('fa-play-circle');
  })  

}

Array.from(document.getElementsByClassName('surahList')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    //console.log(e.target);
    makeAllPlays();
    surahIndex= parseInt(e.target.id);
    //console.log(index);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = 'surah/'+surahIndex+'.mp3';
    audioElement.currentTime=0;
    audioElement.play();
    dispName.innerText=surah[surahIndex-1].surahName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    if(audioElement.paused || audioElement.currentTime<=0){
      gif.style.opacity=1;
    }  
    else{
      gif.style.opacity=0;
    }

  })
})

document.getElementById('previous').addEventListener('click', ()=>{
  if(surahIndex==1)
    surahIndex=11;
  else
    surahIndex = surahIndex-1 ;
  audioElement.src = 'surah/'+surahIndex+'.mp3';
  //console.log(audioElement.src)
  audioElement.currentTime=0;
  audioElement.play();
  dispName.innerText=surah[surahIndex-1].surahName;
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
  let ele=document.getElementById(`${surahIndex}`);
  makeAllPlays();
  ele.classList.remove('fa-play-circle');
  ele.classList.add('fa-pause-circle');
  console.log(ele)
  if(audioElement.paused || audioElement.currentTime<=0){
    gif.style.opacity=1;
  }  
  else{
    gif.style.opacity=0;
  }
})

document.getElementById('next').addEventListener('click', ()=>{
  if(surahIndex==11)
    surahIndex=1;
  else
    surahIndex = surahIndex +1 ;
  audioElement.src = 'surah/'+surahIndex+'.mp3';
  audioElement.currentTime=0;
  audioElement.play();
  dispName.innerText=surah[surahIndex-1].surahName;
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
  let ele=document.getElementById(`${surahIndex}`);
  makeAllPlays();
  ele.classList.remove('fa-play-circle');
  ele.classList.add('fa-pause-circle');
  if(audioElement.paused || audioElement.currentTime<=0){
    gif.style.opacity=1;
  }  
  else{
    gif.style.opacity=0;
  }
})

