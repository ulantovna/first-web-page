const imgElement = document.querySelector("img");

const img1URL = "img\Alatoo.png";
const img2URL = "img\download.jpeg";

function changePhoto(event){
    let current = imgElement.getAttribute("src");
    if(current == img1URL){
        imgElement.setAttribute("src",img2URL);
    } else {
        imgElement.setAttribute("src", img1URL)
    }
}

imgElement.onclick = changePhoto;

function changeHeader() {
    const userName = prompt("Enter your name:");
    if (userName !== null && userName !== "") {
        document.querySelector('h1').innerText = "Welcome " + userName;
    }
}