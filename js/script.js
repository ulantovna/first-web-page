const imgElement = document.querySelector("img");

const img1URL = "C:\\Users\\User\\OneDrive\\Рабочий стол\\web-design\\4th-assign\\first-web-page\\img\\Alatoo.png";
const img2URL = "C:\\Users\\User\\OneDrive\\Рабочий стол\\web-design\\4th-assign\\first-web-page\\img\\download.jpeg";

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