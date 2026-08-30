const monthName=document.getElementById("month-name");
const dayName=document.getElementById("day-name");
const dateName=document.getElementById("day-number");
const yearName=document.getElementById("year");
const date=new Date();
const month=date.getMonth();
const day=date.getDate();
const year=date.getFullYear();

monthName.innerText=date.toLocaleString("en-US",{month:"long"});
dayName.innerText=date.toLocaleString("en-US",{weekday:"long"});
dateName.innerText=day;
yearName.innerText=year;