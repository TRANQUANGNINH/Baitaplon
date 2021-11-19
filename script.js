
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

/*SLIDER */
/*===== AUTO SLIDER ====-*/
let index = 0;
let sliderItems = $$('.slider-item');
let dots = $$('.dot');
let autoSlider = () =>{
    sliderItems.forEach(
        (slider) =>
        {
            slider.classList.remove('active');
        }
    )
    index++;
    dots.forEach(
        (dot) =>
        {
            dot.classList.remove('blur');
        }
    )
    if(index > sliderItems.length-1)
    {
        index = 0;
    }
    sliderItems[index].classList.add('active');
    dots[index].classList.add('blur');

}
setInterval(autoSlider,5000)

/*===== NEXT SLIDER =====*/
let nextSliderBtn = $('.slider-btn-right');
let nextSlider = () =>
{
    nextSliderBtn.addEventListener('click',
        () =>
        {
            sliderItems.forEach(
                (slider) =>
                {
                    slider.classList.remove('active');
                }
            )
            index++;
            dots.forEach(
                (dot) =>
                {
                    dot.classList.remove('blur');
                }
            )
            if(index > sliderItems.length - 1)
            {
                index = 0;
            }
            sliderItems[index].classList.add('active');
            dots[index].classList.add('blur');
        }
    )
}
/*====== BACK SLIDER ======*/
let backSliderBtn = $('.slider-btn-left');
let backSlider = () =>
{
    backSliderBtn.addEventListener('click',
        () =>
        {
            sliderItems.forEach(
                (slider) =>
                {
                    slider.classList.remove('active');
                }
            )
            index--;
            dots.forEach(
                (dot) =>
                {
                    dot.classList.remove('blur');
                }
            )
            if(index < 0)
            {
                index = sliderItems.length - 1;
            }
            sliderItems[index].classList.add('active');
            dots[index].classList.add('blur');
        }
    )
}
autoSlider()
nextSlider()
backSlider()

/*Search*/
let search = $('.search ');
let searchTask = $('.search-task');
let close = $('.search-close')
search.addEventListener('click', 
    function(e)
    {
        Object.assign(searchTask.style, 
            {
                display: 'block',
                transform: 'translateY(0)',
                opacity: '1'
            }
        )
    }
)
close.onclick = function()
{
    searchTask.style.display = 'none';
    let input = $('.search-task input').value = null;
}

/*Sign in/ Sign up*/
/*Sign in*/
let signIn = $$('.sign-in a');
let modal = $$('.modal');
for(let i = 0; i < signIn.length; i++)
{
    signIn[i].addEventListener("click", 
        (e) =>
        {  
           e.preventDefault();
           modal[0].style.display = 'block'
           modal[1].style.display = 'none'
        }
    )
}
document.onkeydown = (e) =>{
    if(e.key === 'Escape')
    {   
        for(let i = 0; i < modal.length; i++)
        modal[i].style.display = 'none';
    }
}

let overlayModal = $$('.overlay-modal');
function closeModal(modals)
{
    for(let i = 0; i < modals.length; i++)
    {
        modals[i].onclick = () => {
            modal[i].style.display = 'none'
        }
    }
}
closeModal(overlayModal)
let signInModal = $('.modal-sign-in a')
signInModal.onclick = (e) => {
    e.preventDefault()
}
/*Sign Up */
let signUp = $('.modal-sign-up a')
signUp.onclick = (e)=>{
    e.preventDefault();
    modal[0].style.display = 'none';
    modal[1].style.display = 'block';
}
/*MODAL*/

let modalIcon = $$(".modal-icon");
closeModal(modalIcon)

/*movie btn */
let movieBtn = $$('.movie-btn--show');
let movieNews = $$('.movie-new');
let movieOld = $$('.movie-old');
movieBtn[0].addEventListener('click',
    function()
    {
        for(let i = 0; i < movieNews.length; i++)
        {
            movieNews[i].classList.remove('hidden');
            movieOld[i].classList.add('hidden');
        }
    }
)

movieBtn[1].addEventListener('click',
    function()
    {
        for(let i = 0; i < movieNews.length; i++)
        {
            movieNews[i].classList.add('hidden');
            movieOld[i].classList.remove('hidden');
        }
    }
)

/*VIDEO TRAILER*/
let Bgtrailer = $('.trailer-bg');
let itemTrailer = $$('.anyTrailer-item');
let videoTrailer = $('.anyTrailer-video video');
let imgTrailer = $('.anyTrailer-video img')
let trailerList = ()=>{
    itemTrailer.forEach
    ((check, index) =>
        {   
            check.addEventListener('click',
            ()=>{
                $('.anyTrailer-item.anyTrailer--blur').classList.remove('anyTrailer--blur');
                Bgtrailer.style.backgroundImage = `url("assets/video/${index+1}.jpg")`;
                itemTrailer[index].classList.add('anyTrailer--blur');
                imgTrailer.src = `assets/video/${index}_img.jpg`;
                videoTrailer.src = `assets/video/${index}_video.mp4`;
                imgTrailer.style.display = 'block';
                run.style.display = 'block';
            })
        }
    )
}
trailerList();

let btnPlay = $('.anyTrailer-icon');
let playTrailer = $('.anyTrailer-play');
let onVideo = $('.anyTrailer-video');
btnPlay.addEventListener('click', 
    ()=>
    {
        playTrailer.style.display = 'none',
        onVideo.style.display = 'block'
    }
)

let run = $('.anyTrailer-video--icon')
run.onclick = ()=>{
    imgTrailer.style.display = 'none';
    videoTrailer.play()
    run.style.display = 'none';
}

videoTrailer.onclick = () =>
{
    if( videoTrailer.play) {
         videoTrailer.pause();
        run.style.display = 'block';
    }
}

/* Btn Menu */
let btnMenuOpen = $('.btn-menu span:first-child');
let btnMenuClose = $('.btn-menu span:last-child');
let displayMenu = $('.menu');
let overlayMenu = $('.overlay-menu');
btnMenuOpen.addEventListener('click', ()=>
    {
        btnMenuOpen.style.display ='none';
        btnMenuClose.style.display = 'block';
        displayMenu.style.display = 'block';
        overlayMenu.style.display = 'block'
    }
)
let closeMenu = (check) =>
{
    check.addEventListener('click', ()=>
        {
            btnMenuOpen.style.display = 'block';
            btnMenuClose.style.display = 'none';
            displayMenu.style.display = 'none';
            overlayMenu.style.display = 'none'
        }
    )
} 
closeMenu(overlayMenu);
closeMenu(btnMenuClose);
