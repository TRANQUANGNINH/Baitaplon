/*Search*/
let search = document.querySelector('.search ');
let searchTask = document.querySelector('.search-task');
let close = document.querySelector('.search-close')
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
    let input = document.querySelector('.search-task input').value = null;
}

/*Sign in/ Sign up*/
/*Sign in*/
let signIn = document.querySelectorAll('.sign-in a');
let modal = document.querySelectorAll('.modal');
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
let overlayModal = document.querySelectorAll('.overlay-modal');
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
/*MODAL*/
let modalIcon = document.querySelectorAll(".modal-icon");
closeModal(modalIcon)

let signInModal = document.querySelector('.modal-sign-in a')
signInModal.onclick = (e) => {
    e.preventDefault()
}
/*Sign Up */
let signUp = document.querySelector('.modal-sign-up a')
signUp.onclick = (e)=>{
    e.preventDefault();
    modal[0].style.display = 'none';
    modal[1].style.display = 'block';
}
/* Btn Menu */
let btnMenuOpen = document.querySelector('.btn-menu span:first-child');
let btnMenuClose = document.querySelector('.btn-menu span:last-child');
let displayMenu = document.querySelector('.menu');
let overlayMenu = document.querySelector('.overlay-menu');
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