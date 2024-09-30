window.alert("This website is a Practice Project and isn't a real company")



let slideIndex = 1;
function plusSlides(n){
    showSlide(slideIndex += n)
}


function showSlide(n){
    let slides = document.querySelectorAll(".mySlides")
    const img1 = document.getElementById("img1")
    const img2 = document.getElementById("img2")
    const img3 = document.getElementById("img3")
    if (n > slides.length){slideIndex = 1}
    if(n < 1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}



/* NAV MENU SLIDE */

const hamburgerBTN = document.getElementById("hamburgerMenu")
const navLinks = document.getElementsByClassName("nav__link")
const linksContainter = document.getElementById("nav__links")
const closeBtn = document.getElementById("closeBtn")

hamburgerBTN.addEventListener("click", () => {
    navLinks[0].classList.add("displayNavLinks");
    navLinks[1].classList.add("displayNavLinks");
    navLinks[2].classList.add("displayNavLinks");
    linksContainter.classList.add("slideNav");
    linksContainter.classList.remove("nav__linksAnimation")
    
    closeBtn.classList.add("closeBtnActive")
    linksContainter.classList.add("containerStyleActive");
})

closeBtn.addEventListener("click", () => {
    navLinks[0].classList.remove("displayNavLinks");
    navLinks[1].classList.remove("displayNavLinks");
    navLinks[2].classList.remove("displayNavLinks");
    linksContainter.classList.remove("slideNav")
    linksContainter.classList.add("nav__linksAnimation")

    closeBtn.classList.remove("closeBtnActive")
    linksContainter.classList.remove("containerStyleActive");
})




/* REVIEW BTN */

const reviewLeft = document.getElementById("reviewLeft")
const reviewRight = document.getElementById("reviewRight")
const review1 = document.getElementById("review1")
const review2 = document.getElementById("review2")
const review3 = document.getElementById("review3")
const slidesReview = document.querySelectorAll(".review")
let reviewcount = 1

reviewLeft.addEventListener("click", () => {
    showReview(reviewcount -= 1)
})
reviewRight.addEventListener("click", () => {
    showReview(reviewcount += 1)
})



function showReview(n){
    if (n > slidesReview.length) { 
            reviewcount = 1; 
        }
    if (n < 1) { 
        reviewcount = slidesReview.length; 
    }


    for(i = 0; i < slidesReview.length; i++){
        slidesReview[i].style.display = "none"
    }
    slidesReview[reviewcount - 1].style.display = "flex"
}

showReview()


/* GUIDEDTOURS */

const Culture = document.getElementById("GuidedTours__Culture")
const Nature = document.getElementById("GuidedTours__Nature")
const GuidedTours__HiddenGems = document.getElementById("GuidedTours__HiddenGems")


const culturalTourObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            Culture.classList.add("showTour");
             Culture.style.scale ="1"
             Culture.style.opacity ="1"
        }
        else {
            Culture.classList.remove("showTour");
            Culture.style.scale ="0";
            Culture.style.opacity ="0"

        }
    })
})

culturalTourObserver.observe(Culture);

const NatureTourObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            Nature.classList.add("showTour");
             Nature.style.scale ="1"
             Nature.style.opacity ="1"
        }
        else {
            Nature.classList.remove("showTour");
            Nature.style.scale ="0";
            Nature.style.opacity ="0"

        }
    })
})

NatureTourObserver.observe(Nature);



const gemsTourObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            GuidedTours__HiddenGems.classList.add("showTour");
             GuidedTours__HiddenGems.style.scale ="1"
             GuidedTours__HiddenGems.style.opacity ="1"
        }
        else {
            GuidedTours__HiddenGems.classList.remove("showTour");
            GuidedTours__HiddenGems.style.scale ="0";
            GuidedTours__HiddenGems.style.opacity ="0"
        }
    })
})

const hiddenTours3 = document.querySelectorAll(".GuidedTours__HiddenGems")
gemsTourObserver.observe(GuidedTours__HiddenGems);









