const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const charRemaining = document.getElementById("charRemaining");
updatechar();
textInput.addEventListener("keyup", () => {
    updatechar();
});
function updatechar(){
    charCount.textContent = textInput.value.length;
    charRemaining.textContent = textInput.getAttribute("maxlength") - textInput.value.length;
}