const parallaxElement = document.querySelectorAll(".parallax-element");
const screenWidth = window.screen.width;
let lastScrollY = window.scrollY;
console.log("loading")
const body = document.querySelector("body");
// parallax scrolling
window.addEventListener("scroll", function() {
    const scrollY = window.scrollY;
    // console.log({ scrollY });
    const scrollDirection = scrollY > lastScrollY ? "down" : "up";
    for (let i = 0; i < parallaxElement.length; i++) {
        if (scrollDirection == 'down') {
            parallaxElement[i].style.transform = `translateY(${-scrollY}px)`;
            parallaxElement[1].style.opacity = 1 - (scrollY / 2)

        } else {
            parallaxElement[i].style.transform = `translateY(0px)`
            parallaxElement[i].style.opacity = 1;
        }

        // // remove layout mene on scroll
        // if (screenWidth < 1024 && Math.abs(lastScrollY - scrollY) > 30) {
        //     layoutMenu.style.height = "0";
        //     bottomNav.style.opacity = 0
        //     bottomNav.style.display = 'none'
        // }
    }
    lastScrollY = scrollY;
}, false);



// hovering lighting
const listItems = document.querySelectorAll(".bottom-nav a");
const list = document.querySelector(".bottom-nav");

list.addEventListener("mouseleave", function() {
    listItems.forEach(item => {
        item.style.color = "white";
    });
});
listItems.forEach(item => {
    item.addEventListener("mouseover", function() {
        item.style.color = "white";
        listItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.style.color = "gray";
            }
        });
    });
});




// open navbar
const navbarButton = document.querySelector('.mobile-nav .menu')
const layoutMenu = document.querySelector('.layout-menu')
const bottomNav = document.querySelector('.bottom-nav')

navbarButton.addEventListener('click', () => {
    console.log("click")

    if (layoutMenu.style.height == '') {
        bottomNav.style.opacity = 1
        layoutMenu.style.height = "100%";
        bottomNav.style.display = 'flex'


    } else {
        layoutMenu.style.height = "";
        bottomNav.style.opacity = 0
        bottomNav.style.display = 'none'


    }
})



// image shows up(third section)
const hiddenElement = document.querySelectorAll('.f-card *')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            // entry.target.classList.remove('show')

        }
    })
})

hiddenElement.forEach(el => {
    el.classList.add('hidden')
    observer.observe(el)
})



// random background
let backgroundOption = true;
let landingPage = document.querySelector(".hero-img");
let imgsArray = ["01.avif", "02.avif", "03.avif"];

function randomizeImgs() {
    if (backgroundOption === true) {
        backgroundInterval = setInterval(() => {
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            landingPage.style.backgroundImage = 'url("./assets/' + imgsArray[randomNumber] + '")';
        }, 5000);
    }
}

randomizeImgs();



// text animation
let words = document.querySelector(".animated-text-parent");
window.onload = function() {
    let wordsOffsetTop = words.offsetTop;
    let wordsOuterHeight = words.offsetHeight;
    let windowHeight = this.innerHeight;
    let windowScrollTop = this.pageYOffset;
    if (windowScrollTop > (wordsOffsetTop + wordsOuterHeight - windowHeight)) {
        let all_a = document.querySelectorAll(".a");
        let all_b = document.querySelectorAll(".b");
        let all_c = document.querySelectorAll(".c");
        let all_d = document.querySelectorAll(".d");
        let all_e = document.querySelectorAll(".e");
        all_a.forEach(a => {
            a.style.opacity = "1";
            a.style.transition = "all 2s 0.1s";
        });
        all_b.forEach(b => {
            b.style.opacity = "1";
            b.style.transition = "all 2s 0.2s";
        });
        all_c.forEach(c => {
            c.style.opacity = "1";
            c.style.transition = "all 2s 0.3s";
        });
        all_d.forEach(d => {
            d.style.opacity = "1";
            d.style.transition = "all 2s 0.4s";
        });
        all_e.forEach(e => {
            e.style.opacity = "1";
            e.style.transition = "all 2s 0.7s";
        });
    }
};




// handle language

// Handle Active State
function handleActive(ev) {
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });
    ev.target.classList.add("active");
}

// switch language 

let languageOption = true;
let languageInterval;
const randomlang = document.querySelectorAll(".flex span");

randomlang.forEach(span => {

    span.addEventListener("click", (e) => {
        handleActive(e);
        if (e.target.dataset.language === 'yes') {
            languageOption = true;
            //   randomizelang();
            localStorage.setItem("language_option", true);
        } else {
            languageOption = false;
            clearInterval(languageInterval);
            localStorage.setItem("language_option", false);
        }
    });
});



// Check If There is Local Storage Random language Item
let languageLocalItem = localStorage.getItem("language_option");

// Check If Random language Local Storage Is Not Empty
if (languageLocalItem !== null) {
    // Remove Active Class From All Spans
    document.querySelectorAll(".flex span").forEach(element => {
        element.classList.remove("active");
    });
    if (languageLocalItem === 'true') {
        languageOption = true;
        document.querySelector(".flex .yes").classList.add("active");
    } else {
        languageOption = false;
        document.querySelector(".flex .no").classList.add("active");
    }
}

// ends handle language








// ==================================================================================================














































//