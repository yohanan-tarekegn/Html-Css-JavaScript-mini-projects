const inputel=document.querySelector('.input');
const bodyel=document.querySelector('body');
inputel.checked=JSON.parse(localStorage.getItem('darkmode'));
console.log(inputel.checked);
updateBody();
function updateBody(){

    if(inputel.checked){
        bodyel.style.backgroundColor="black";
    } else {
        bodyel.style.backgroundColor="white";
    }
}
inputel.addEventListener('input',()=>{
    updateBody();
    updatelocal();
});

function updatelocal(){
    localStorage.setItem('darkmode',inputel.checked);
    JSON.stringify(inputel.checked);
}