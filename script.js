// toggle menu button
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');
    menu.classList.toggle('active');
    nav.classList.toggle('active');

}

/* Change background video when click on the gallery image */
function changeVideo(name){
    const byVideoList = document.querySelectorAll('.bg-video');
    const trailer =  document.querySelectorAll('.trailer');
    const model = document.querySelectorAll('.model');

    byVideoList.forEach(video => {
        video.classList.remove('active');
        if(video.classList.contains(name)){
            video.classList.add('active');
        }
    });

    trailer.forEach(trailer => {
        trailer.classList.remove('active');
        if(trailer.classList.contains(name)){
            trailer.classList.add('active');
        }
    });

    model.forEach(model => {
        model.classList.remove('active');
        if(model.classList.contains(name)){
            model.classList.add('active');
        }
    });

}

// Play and Pause video


// Pause video
function pauseVideo() {
    const byVideoList = document.querySelectorAll('.bg-video');
    byVideoList.forEach(video => {
        video.pause();

        togglePlay();
    });
}
function playVideo() {
    const byVideoList = document.querySelectorAll('.bg-video');
    byVideoList.forEach(video => {
       
            video.play();

            togglePlay();
            
    });
}

// Play video
function togglePlay(){
    const play = document.querySelector('.play');
    const pause = document.querySelector('.pause');
    play.classList.toggle('active');
    pause.classList.toggle('active');
}
