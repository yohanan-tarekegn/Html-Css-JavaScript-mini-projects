const bodyEl=document.querySelector('body');
bodyEl.addEventListener('mousemove',(event)=>{
    const xpos=event.offsetX;
    const ypos=event.offsetY;
    const spanEl=document.createElement('span');
    spanEl.style.left=`${xpos}px`;
    spanEl.style.top=`${ypos}px`;
    const size=Math.random();
    spanEl.style.width=`${size * 100}px`;
    spanEl.style.height=`${size * 100}px`;
    bodyEl.appendChild(spanEl);
    setTimeout(()=>{
        spanEl.remove();
    }, 3000);
});
