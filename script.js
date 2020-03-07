const lightbox = document.createElement('div');
const lightboxContent = document.createElement('div');

lightboxContent.className = "lightbox-content";
lightbox.id = "lightbox";

document.body.appendChild(lightbox);
lightbox.appendChild(lightboxContent);

const buttonLeft = document.createElement('button');
buttonLeft.className = "btn btn-left";
buttonLeft.innerHTML = `<i class="fa fa-chevron-left"></i>`;

const buttonRight = document.createElement('button');
buttonRight.className = "btn btn-right";
buttonRight.innerHTML = `<i class="fa fa-chevron-right"></i>`;

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

    buttonRight.addEventListener('click', (ev) => {
        let currImg = lightboxView.firstChild;
        let currIndex;
        let nextIndex;
        let imageContainer = document.querySelector('.grid').children;
        
        for (let i = 0; i <= imageContainer.length; i++) {
            if (imageContainer[i].src === currImg.src) {
                currIndex = i;
                nextIndex = currIndex + 1;
                if (nextIndex === imageContainer.length) {
                    buttonRight.setAttribute('disabled', true);
                    return
                } else {
                    currImg.src = imageContainer[nextIndex].src;
                }
                return
            } else {
                console.log(false);
            }
        }
    });
    
}
next();


const previous = () => {
    buttonLeft.addEventListener('click', (ev) => {
        let currImg = lightboxView.firstChild;
        let currIndex;
        let prevIndex;
        let imageContainer = document.querySelector('.grid').children;

        for (let i = 0; i <= imageContainer.length; i++) {
            if(imageContainer[i].src === currImg.src){
                currIndex = i;
                if(currIndex === 0){
                    buttonLeft.setAttribute('disabled', true);
                    return;
                }else{
                    prevIndex = currIndex - 1;
                    currImg.src = imageContainer[prevIndex].src;
                }
            }
        }
    });
}
previous();

