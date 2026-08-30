const container = document.querySelector('.container');
const careers=["yohanan","developer", "student","pilot"];
let careerIndex=0;
let i=0;
updateCareer();
function updateCareer() {
    i++;
    container.innerHTML = `<h1>I am ${careers[careerIndex].slice(0, i)}</h1>`;
    if (i === careers[careerIndex].length) {
        i = 0;
        careerIndex++;
    }
    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(updateCareer, 400);
}

