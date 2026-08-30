const imgcontainer=document.querySelector('.container');
const btn=document.querySelector('.btn');
btn.addEventListener("click", ()=>{
    addnew();
});
function addnew(){
    for(let i=0;i<4;i++){
        const newimg=document.createElement('img');
        newimg.src="https://picsum.photos/300?random="+Math.floor(Math.random()*2000);
        imgcontainer.appendChild(newimg);
    }
    
}