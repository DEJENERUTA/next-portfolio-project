//Read more about page
const hobby = document.querySelector("#hobby");
const languages = document.querySelector("#languages");
const knap = document.querySelector("#moreButton");
knap.addEventListener("click", showHide);
function showHide() {
    if (hobby.style.display != "block" && languages.style.display != "block") {
        hobby.style.display = "block";
        languages.style.display = "block";
        knap.textContent = "Read Less";

    }
    else {
        hobby.style.display = "none";
        languages.style.display = "none";
        knap.textContent = "Read More";
    }
}

