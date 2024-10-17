function js (){
    console.log('Я учу JavaScript')
}

js();

const img = document.querySelector('img');

function nextImg() {
    img.src = 'image2.jpg';
}

function prevImg() {
    img.src = 'image1.jpg';
}
