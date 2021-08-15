//image gallery project page

const bigImg = document.querySelector("#galleryPhoto");
const photoList = ["project(desktop)","verdensmaal-project","web-avis-project"];
const linkList = ["karmen","fn-site-project","webavis"]
const links = document.querySelector(".project-links");
let index = 0;
let newPhoto;
const arrowRight = document.querySelector("#next");
const arrowLeft = document.querySelector("#prev");

document.querySelector("#next").addEventListener("click", skift);
document.querySelector("#prev").addEventListener("click", skift);

function skift() {
    if (this.getAttribute("id") === "next") {
        if (index <photoList.length-1) {
            index++;
        } 
    } else {
            if (index > 0) {
                index--;
            }
     
 }
    newPhoto = "image/" + photoList[index] + ".png";
    bigImg.setAttribute("src", newPhoto);
links.setAttribute("href", "https://deje0016.elev.nextkbh.dk/" + linkList[index]);
    if (index === 0) {
        arrowLeft.style.display = "none";
    } else if (index === photoList.length - 1) {
        arrowRight.style.display = "none";
    } else {
        arrowLeft.style.display = "block";
        arrowRight.style.display = "block";
    }
}