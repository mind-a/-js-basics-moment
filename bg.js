const body = document.querySelector("body");

const IMG_NUMBER = 4;

//API상에서 동작할때 로딩해오는 시간이 많이 걸릴 경우
// function handleImageLoad(){
//     console.log("finished loading");
// }

function paintImage(imgNumber){
    const image = new Image();
    image.src=`images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
    // image.addEventListener("loadend", handleImageLoad);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}
function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();