var images = document.querySelectorAll('.image img');
var prev = document.querySelector('.prev');
var next = document.querySelector('.right');
var close = document.querySelector('.close');
var gallery = document.querySelector('.gallery');
var galleryImg = document.querySelector('.gallery-inner img');

var curentIndex = 0;


function showGallery(){

    if(curentIndex == 0){
        prev.classList.add('hide');
    }else{
        prev.classList.remove('hide');
    }

    if(curentIndex == images.length - 1){
        next.classList.add('hide');
    }else{
        next.classList.remove('hide');
    }


    galleryImg.src = images[curentIndex].src;
        gallery.classList.add('show');
}
images.forEach((item, index) => {
    item.addEventListener('click', function(){
        curentIndex = index;
        showGallery();
    });

// Click Icon Close
    close.addEventListener('click', function(){
        gallery.classList.remove('show');
    });
});

//Click Button Prev
prev.addEventListener('click', function(){
    if(curentIndex > 0){
        curentIndex--;
        showGallery();
    }
});

// Click Button Next
next.addEventListener('click', function(){
    if(curentIndex < images.length-1){
        curentIndex++;
        showGallery();
    }
})


// Press ESC
document.addEventListener('keydown', function(e){
    if(e.keyCode == 27){
        gallery.classList.remove('show');
    }
})