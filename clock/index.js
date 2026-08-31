const hourel =document.querySelector(".hour");
const minuteel =document.querySelector(".minute");
const secondel =document.querySelector(".second");

function updateclock(){
    const currentdate=new Date();
    setTimeout(updateclock, 1000);
    const hour=currentdate.getHours();
    const minute=currentdate.getMinutes();
    const second=currentdate.getSeconds();
    const hourdog=(hour/12)*360;
    hourel.style.transform=`rotate(${hourdog}deg)`;
    const minutedog=(minute/60)*360;
    minuteel.style.transform=`rotate(${minutedog}deg)`;
    const seconddog=(second/60)*360;
    secondel.style.transform=`rotate(${seconddog}deg)`;

}
updateclock();