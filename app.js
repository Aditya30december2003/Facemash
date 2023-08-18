const imagesArray=[
    {
        id:1,
        title:"Robert Pattinson",
        src:'imgs/image1.jpg'
    },
    {
        id:1,
        title:"Saif Ali Khan",
        src:'imgs/image2.jpg'
    },
    {
        id:1,
        title:"Cillian Murphy",
        src:'imgs/image3.jpg'
    },
    {
        id:1,
        title:"Henry Cavill",
        src:'imgs/image4.jpg'
    },
    {
        id:1,
        title:"Andrew Garfield",
        src:'imgs/image5.jpg'
    },
    {
        id:1,
        title:"Elon Musk",
        src:'imgs/image6.jpg'
    },
    {
        id:1,
        title:"John Krasinski",
        src:'imgs/image7.jpg'
    },
    {
        title:"Brad Pitt",
        src:'imgs/image8.jpg'
    },
    {
        id:1,
        title:"Hrithik Roshan",
        src:'imgs/image9.jpg'
    },
    {
        id:1,
        title:"Shah Rukh Khan",
        src:'imgs/image10.jpg'
    },

]

let image1=document.querySelector('.image1')
let image2=document.querySelector('.image2')
let img1=document.querySelector('.img1')
let img2=document.querySelector('.img2')
let ImageBtn=document.querySelectorAll('.button')
let or=document.querySelector('.or')
let actor=document.querySelector('.name')
let title1=document.querySelector('.title1')
let title2=document.querySelector('.title2')

    image1.src=imagesArray[0].src
    title1.innerHTML=imagesArray[0].title
    image2.src=imagesArray[1].src
    title2.innerHTML=imagesArray[1].title

let counter=2;

ImageBtn.forEach((button)=>{
 
    button.addEventListener('click',(e)=>{
        if(e.target.dataset.id=='image1'){
         image2.src=imagesArray[counter].src
         title2.innerHTML=imagesArray[counter].title
         counter++;
        }
        else if(e.target.dataset.id=='image2'){
         image1.src=imagesArray[counter].src
         title1.innerHTML=imagesArray[counter].title
         counter++;
        }
 
        console.log(counter)
 
        if(counter==10){
         if(e.target.dataset.id=='image1'){
             document.querySelector('.image-container').removeChild(img2)
             image1.style.width="300px"
             image1.style.height="400px";
             title1.style.fontSize="3rem"
             title1.style.margin="-15rem 25rem"
             title1.style.width="40rem"
         }
         else if(e.target.dataset.id=='image2'){
             document.querySelector('.image-container').removeChild(img1)
             image2.style.width="300px"
             image2.style.height="400px";
             title2.style.fontSize="3rem"
             title2.style.margin="-15rem 25rem"
             title2.style.width="30rem"
         }
          or.style.display="none"
        //   document.querySelector('.headline').style.display="none";
        
         }
     })

  
})

function blinkText(title){
   title.style.opacity=0;
}
