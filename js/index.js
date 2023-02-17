//....slider...\\

let slides = document.querySelectorAll('.offer__slide')
let prev = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let curent = document.querySelector("#current")
let total = document.querySelector("#total")
let slideIndex = 1

function showSlides(n) {
    if(n > slides.length) {
        slideIndex = 1
    }
    if(n < 1) {
        slideIndex = slides.length
    }

    slides.forEach(slide => slide.classList.add('hide'))
    curent.innerHTML = slideIndex
    total.innerHTML = slides.length
    console.log(n);
    slides[slideIndex -1].classList.remove('hide')
    slides[slideIndex -1].classList.add('fade')
}
showSlides(slideIndex)

next.onclick = () => {
    slideIndex++
    showSlides(slideIndex)
}
prev.onclick = () => {
    slideIndex--
    showSlides(slideIndex)
}

//....modal-window...\\

let openbtns = document.querySelectorAll("[data-modal]")
let modal = document.querySelector(".modal")
let closebtns = document.querySelector("[data-close]")

openbtns.forEach(btn => {
    btn.onclick = () => {
        modal.style.display = "flex"
    }
})

closebtns.onclick = () => {
    modal.style.display = "none"
}


//....tabcontent...\\
let tabcontents = document.querySelectorAll('.tabcontent')
let tabheader__items = document.querySelectorAll('.tabheader__items .tabheader__item')

function showTabs(n) {
    tabcontents.forEach(el => el.classList.add('hide'))

    tabcontents[n].classList.remove('hide')
    tabcontents[n].classList.add('show', 'fade')
}

showTabs(0)


tabheader__items.forEach((item, idx) => {
    item.onclick = () => {
        tabheader__items.forEach(el => el.classList.remove('tabheader__item_active'))

        item.classList.add('tabheader__item_active')

        showTabs(idx)
    }
})

    
// ..... kkal .....\\
let gens = document.querySelectorAll('#gender .calculating__choose-item')
let inputs = document.querySelectorAll('.calculating__choose_medium input')
let actBtns = document.querySelectorAll('.calculating__choose_big [data-act]')
let resultView = document.querySelector('#result')

let userData = {
    gender: "woman",
}


gens.forEach(btn => {
    btn.onclick = () => {
        gens.forEach(el => el.classList.remove('calculating__choose-item_active'))    
        btn.classList.add('calculating__choose-item_active')

        let g = btn.getAttribute('data-g') 

        userData.gender = g

    }
})

inputs.forEach(inp => {
    inp.onkeyup = () => {
        let key = inp.id
        let val = inp.value

        userData[key] = val

      if(typeof inp !== "text") {
        alert("what are you dumb ?")  
    }
    }
})


actBtns.forEach(btn => {
    btn.onclick = () => {
        actBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))    
        btn.classList.add('calculating__choose-item_active')

        let activeCount = btn.getAttribute('data-act') 

        let {active, gender, weight, height, age} = userData

        active = activeCount

        if(gender === 'woman') {
            let res = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;

            resultView.innerHTML = Math.round(res * active)
        } else {
            let res = 66.5 + 13.75 * weight + 5.003 * height - 6.775 * age

            resultView.innerHTML = Math.round(res * active)
        }

    }
})
   


//......promotion.....\\
let $days = document.querySelector('.timer .days');
let $hours = document.querySelector('.timer .hours');
let $minutes = document.querySelector('.timer .minutes');
let $seconds = document.querySelector('.timer .seconds');


document.addEventListener('DOMContentLoaded', function() {
    const deadline = new Date(2023, 04, 20);
    let timerId = null;
   
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      let days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      let hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      let minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      let seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;

    }
   
    countdownTimer();
    
    timerId = setInterval(countdownTimer, 1000);
  });

  


window.addEventListener("scroll" , () => {
    let scrollable = document.documentElement.scrollHeight - window.innerHeight 
    let scrolled = window.scrollY

     if(scrolled >= scrollable) {
       modal.style.display = "flex" 
    } else {
        modal.style.display = "none" 
    }

  
})
