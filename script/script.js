const share=document.getElementById('share')
const next=document.getElementById('next')
const img=document.getElementById('img')
let liki='njjo'


const memes= Array.from(fetch('https://meme-api.herokuapp.com/gimme').then(response => response.json())
.then(data=>{
    data=data.preview[3];
    img.src=data;
    liki=data
    // console.log(data)
}))
next.addEventListener('click',()=>{
    const memes= Array.from(fetch('https://meme-api.herokuapp.com/gimme').then(response => response.json())
.then(data=>{
    data=data.preview[3];
    img.src=data;
    liki=data
    console.log(data)
}))
})

share.addEventListener('click',()=>{
    navigator.clipboard.writeText(liki);

})
