const lightbox = document.createElement('div');
const lightboxContent = document.createElement('div');

lightboxContent.className = "lightbox-content";
lightbox.id = "lightbox";

document.body.appendChild(lightbox);
lightbox.appendChild(lightboxContent);

const buttonLeft = document.createElement('button');
buttonLeft.className = "btn btn-left";
buttonLeft.innerHTML = `<i class="fa fa-long-arrow-left"></i>`;

const buttonRight = document.createElement('button');
buttonRight.className = "btn btn-right";
buttonRight.innerHTML = `<i class="fa fa-long-arrow-right fa-2x"></i>`;

lightboxContent.innerHTML = `
    <div class="lightbox-view-container">
        <div class="lightbox-view"></div>
    </div>
    <div class="lightbox-text"></div>
`;
const lightboxViewContainer = document.querySelector('.lightbox-view-container');
const lightboxView = document.querySelector('.lightbox-view');
lightboxViewContainer.appendChild(buttonRight);
lightboxViewContainer.appendChild(buttonLeft);


const images = document.querySelectorAll('img');


images.forEach(img => {
    img.addEventListener('click', (ev) => {
        lightbox.classList.add('active');
        const image = document.createElement('img');
        image.src = img.src;
        while (lightboxView.firstChild) {
            lightboxView.removeChild(lightboxView.firstChild)
        }
        lightboxView.appendChild(image);
    })
})

document.querySelector('.lightbox-view-container').addEventListener('click', (ev) => {
    if (ev.target !== ev.currentTarget) return
    lightbox.classList.remove('active');
})


const next = () => {
    let currImg = lightboxView.firstChild;
    let currIndex;
    let nextImgSrc = '';
    let imageContainer = document.querySelector('.grid').children;
    //console.log(imageContainer, 'all images');
    
    buttonRight.addEventListener('click', (ev) => {
        console.log(currImg, 'curr img')
        for (let i = 0; i <= imageContainer.length; i++) {
            console.log(imageContainer[i].src, 'all images');
           
            if (imageContainer[i].src === currImg.src) {
                console.log(i, 'index');
                currIndex = i;
                return
            }else{
                console.log(false);
            }
        }
    });
    console.log()
}
next();



