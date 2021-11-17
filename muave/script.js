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

/*TICKET*/

let citiesItem = document.querySelectorAll('.cities-item a');
let ticketStreets = document.querySelectorAll('.ticket-streets')
let citiesItemBlur = document.querySelector('.cities-item--blur');
let streetItem = document.querySelectorAll('.streets-item a');
let textCity = citiesItem[0].innerText;
for(let i = 0; i < citiesItem.length; i++)
{   
    citiesItem[i].addEventListener('click', (e)=>
        {   
            textCity = citiesItem[i].innerText;
            document.querySelector('.ticket-streets.active').classList.remove('active');
            document.querySelector('.cities-item.cities-item--blur').classList.remove('cities-item--blur')
            e.preventDefault();
            ticketStreets[i].classList.add('active');
            document.querySelectorAll('.cities-item')[i].classList.add('cities-item--blur');
        }
    )
}

let itemLocal = document.querySelectorAll('.streets-item');
let checkStreet = false;
let textStreet;
streetItem.forEach((item,i)=>
    {   
        item.onclick = (e)=>
        {   
            checkStreet = true;
            textStreet = item.innerText;
            e.preventDefault();
            let check = document.querySelector('.streets-item.orange');
            if(check)
            {
                check.classList.remove('orange');
            }
            itemLocal[i].classList.add('orange');
        }
    }
)

/*TICKET MOVIE */
let ticketMovie = document.querySelectorAll('.ticket-movie-item a')
let icontick = document.querySelectorAll('.ticket-movie-item i')
let checkTicketMovie = false;
let textMovie;
ticketMovie.forEach(
    (check,index)=>
    {   
        
        check.onclick = (e)=>
        {   
            textMovie = check.innerText;
            checkTicketMovie = true;
            console.log(check);
            e.preventDefault()
            let color = document.querySelector('.ticket-movie-item a.color-text');
            let iconCheck = document.querySelector('.ticket-movie-item i.active')
            if(color && iconCheck)
            {
                color.classList.remove('color-text');
                iconCheck.classList.remove('active')
            }
            check.classList.add('color-text');
            icontick[index].classList.add('active');
            icontick[index].style.color = '#9e0'
        }
    }
)

/*BOOKING*/
let bkInput = document.querySelectorAll('.booking-type input');
let bkBtn = document.querySelectorAll('.type--btn');
let typeCount = document.querySelectorAll('.type-count');
let bkSum = document.querySelector('.sum span');

function sum(i,price)
{
    let sum = Number(bkInput[i].value) * price;
    typeCount[i].textContent = `${sum}`;
    return sum;
}
console.log(bkInput);
function input(i)
{   
    bkInput[i].onkeyup = (e) =>
    {
        if(Number(bkInput[i].value) && i == 0)
        {   
            sum(0,75000);
        }
        else if (Number(bkInput[i].value) && i == 1)
        {
            sum(1,70000);
        }
        if(e.key === 'Backspace')
        {
            typeCount[i].textContent = 0;
        }
        bkSum.textContent = `${sum(0,75000) + sum(1,70000)}`;
    }
    return Number(bkInput[i].value)
}   
input(0);
input(1);

function btnCreat(i,price)
{
    bkBtn[2*i+1].onclick = ()=>
    {   
        let c = input(i);
        c++;
        if(0 <= c && c <=9)
        {
            console.log(c)
            bkInput[i].value = `${c}`;
            sum(i,price);
            bkSum.textContent = `${sum(0,75000) + sum(1,70000)}`;
        }
    }
}
btnCreat(0,75000);
btnCreat(1,70000);
function btnReduce (i,price)
{
    bkBtn[2*i].onclick = ()=>
    {   
        let c = input(i);
        c--;
        if(0 <= c)
        {
            console.log(c)
            bkInput[i].value = `${c}`;
            sum(i,price);
            bkSum.textContent = `${sum(0,75000) + sum(1,70000)}`;
        }
    }
    return Number(bkInput[i].value);
}
btnReduce(0,75000);
btnReduce(1,70000);

/* SEAT */
let seatNb = document.querySelectorAll('.seat-nb input');
let labelNb = document.querySelectorAll('.seat-nb label');
let countNumber = 0;let a = [];let b = [];
for(let i = 0; i < seatNb.length; i++)
{   
    seatNb[i].checked == false;
    seatNb[i].onclick = () =>
    {   
        let countA = input(0) + input(1);
        if(seatNb[i].checked == true && countA != 0)
        {   
            countNumber++;
            if(countNumber >= 0 && countNumber <= countA)
            {   a.push(i);
                labelNb[i].style.backgroundColor = '#9e0';
                console.log(countNumber);
            }else
            {
                a.push(i)
                let b = a.shift(i);
                seatNb[b].checked = false;
                labelNb[b].style.backgroundColor = 'rgb(55,54,59)';
                labelNb[i].style.backgroundColor = '#9e0'; 
            }
        }
    }
}

/*BTN Next */
let btnBookingNext = document.querySelectorAll('.btn-next button');
let ticket = document.querySelector('.ticket');
let booking = document.querySelector('.booking-type');
let seat = document.querySelector('.seat');
let date = document.querySelector('.date');
btnBookingNext[0].onclick = ()=>
{   
    if(checkStreet == false) alert('💥Chưa Chọn rạp!!!!!')
    else if(checkTicketMovie == false) alert('💥 Chưa chọn phim!!!!!!');
    else if(checkTime == false) alert('💥Chưa chọn lịch !!!!!!!');
    else{
        btnBookingNext[0].style.display = 'none';
        btnBookingNext[1].style.display ='block'
        booking.style.display = 'block';
        ticket.style.display = 'none'
        seat.style.display = 'block';
        date.style.display = 'none';
    }
}

/*correct */

let btnCorrect = document.querySelector('.creat-booking');
let resultStand = document.querySelector('.result-stand');
let resultMovie = document.querySelector('.result-movie');
let resultDate = document.querySelector('.result-date');
let resultSeat = document.querySelector('.result-seat');
let result = document.querySelector('.result');
btnBookingNext[1].onclick = ()=>
{   
    btnCorrect.style.transform = 'translateX(0)';
    result.style.transform = 'translateX(100%)';
    setTimeout(
        function()
        {   
            btnCorrect.style.transform = 'translateX(100%)';
            result.style.transform = 'translateX(0%)';
        },
        1000
    )
    resultMovie.textContent = `${textMovie}`;
    resultStand.textContent = `${textStreet} / ${textCity} `;
    resultDate.textContent = `${textNNN}, vào lúc ${textDate}`;
    resultSeat.textContent = `${a.join(', ')}`;
}

/* btn-time */
let btnTime = document.querySelectorAll('.type-date--btn button');
let checkTime = false;
let textDate;
let textNNN;
for(let i = 0; i < btnTime.length; i++)
{   
    btnTime[i].onclick = ()=>
    {   
        textDate = btnTime[i].innerText;
        textNNN = (i > 3)?`Thứ tư, 17/11/2021`: `Thứ bảy, 19/11/2021`;
        checkTime = true;
        let dateColor= document.querySelector('.type-date--btn button.color-text')
        if(dateColor)
        {
            dateColor.classList.remove('color-text');
        }
        btnTime[i].classList.add('color-text');
    }
}
