// locomotiv**************************************************

 
// locomotiv**************************************************


gsap.from("#nav #nav-left , #nav-middle h3 , #nav-right   " , {
    y: -90,
    opacity: 0,
    scale:1.1,
    stagger:0.2,
    duration: 0.5,
    delay:0.3
    
})
gsap.to("#nav", {
    width: "100vw",
    backgroundColor: " rgb(30, 31, 31)",
    duration: 0.5,
    y: -20,
    scrollTrigger: {
        tigger: "#nav",
        scroller: "body",
        // markers: true ,
        start: "top -10%",
        end: "top -11%",
        scrub: 2
    }
})

//hero section
let bg_video = document.querySelector("#bg-video-hero");
bg_video.playbackRate = 0.6

var tl = gsap.timeline();
tl.from("#hero-section-left h1 span", {
    x: -500,
    opacity:0.1,
    scale:2,
    stagger: 0.2,
    duration: 0.5,
    delay: 0.3
})

gsap.from(" #hero-section-left>p", {
    opacity: 0,
    scale: 0.9,
    stagger: 3,
    duration: 1,  
    delay:1,
})

tl.to("#hero-buttons button", {
    scale:1.1,
    stagger: 0.5,
    duration: 0.4,
    
})
gsap.from("#hero-section-right " , {
    // x: 500,
    opacity: 0, 
    scale:2,
    duration: 1, 
    stagger: -0.5,
    delay: 0.4,
     
})

gsap.from("#hero-section>video", {
    scale: 1.5,
    opacity: 0,
    // x: -500,
    // y: -500,
    duration: 1,
    delay: 0.5,
    scrub: 3,
})
 
gsap.to("#hero-section ,#hero-section img,#hero-section-left,hero-section-right", {
    // backgroundColor:"transparent",
    opacity:0,
    scrollTrigger: {
        trigger: "#hero-section",
        scroller: "body",
        // markers: true,
        start: "bottom 90%",
        end: "bottom 21%",
        scrub:1,
    }
})



// about section

 

let about_cards = document.querySelectorAll(".about-greencheak");
about_cards.forEach((ele, index) => {
    
    gsap.from(ele, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        // scrub:1, 
        
        scrollTrigger: {
            trigger: ".about-greencheak",
            stagger:0.5,
            scroller: "body",
            // markers: true,
            start: "top 90%",
            end: "top 80%",
            scrub: 0.2,
        }, 
    
    })

})


//how it works  section 
let hiw_cards = document.querySelectorAll(".hiw-card");

hiw_cards.forEach((elem, index) => {
    gsap.from(elem, {
        // y:500,
        opacity: 0,
        // delay: 0.5,
        duration: 0.5, 
         
        scrollTrigger: {
            trigger: elem,
            scroller: "body",
            // markers:true,
            start: "top bottom",
            end: "top 90%",
            // stagger:0.5,
            scrub:0.4,
        }
    })
})


// whay choose

let wc_tl = gsap.timeline();

wc_tl.from(" #whay-choose-top>h2 , #whay-choose-top>h3  ", {
    y: 500,
    opacity: 0,
    scale: 1.1,
    stagger: 0.2,
    duration: 0.5,
    delay: 0.3,
    scrollTrigger: {
        opacity:1,
        trigger: "#whay-choose",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 69%",
        scrub: 3,
        
    }
})



let wc_cards = document.querySelectorAll(".wc-card");

wc_cards.forEach(elem => {
    wc_tl.from(elem, {
        y: 500,
        opacity: 0,
        scale: 1.1,
        stagger: 0.2,
        duration: 0.5,
        delay: 0.3,
        scrollTrigger: {
            opacity: 1,
            trigger: elem,
            scroller: "body",
            // markers: true,
            start: "top 180%",
            end: "top 180%",
            scrub: 3,
        }
    });
    elem .addEventListener('mouseenter', () => {
        gsap.to(elem , {
            background: "linear-gradient(to right, #F65741, #C53678)",
            scale:1.1,
            y: -15,
            duration: 0.5,
            ease: 'power2.inOut',
        });
    });
    elem .addEventListener('mouseleave', () => {
        gsap.to(elem , {
            background: "transparent",
            scale:1,
            y: 0,
            duration: 0.5,
            ease: 'power2.inOut',
        });
    });
});

 

gsap.to("#wc-bottom-right #wc-img1,#wc-img2", {
    duration: 2,
    y: "-20 20",
    x: 0,
    scale: 1.1,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    stagger: 0.5
});


// tokonomics

gsap.to("#toko-bottom-left", {
    duration: 3,
    scale:1.1,
    x: 0, // Horizontal movement
    y: -30,  // Vertical movement
    // rotation: 360, // Rotate the element
    ease: "power1.inOut", // Easing function
    repeat: -1, // Repeat the animation infinitely
    yoyo: true, // Reverse the animation for a bouncing effect
});

gsap.from("#toko-bottom-left img", {
    x: -500,
    delay:1,
    duration:5,
    stagger:3,
    scrollTrigger: {
        trigger: "#toko-bottom-left img",
        scroller: "body",
        // markers: true, 
        start: "top bottom",
        end: "top bottom",
        scrub: 3,
        
    }
})
gsap.from("#mid-right   ", {
    x: 500,
    delay:0.5,
    duration: 4 ,
    stagger:3,
    scrollTrigger: {
        trigger: "#mid-right",
        scroller: "body",
        // markers: true, 
        start: "top bottom",
        end: "top bottom",
        scrub: 3,
        
    }
})

//roadmap 
let tl_roadmap = gsap.timeline();


let roadmap_cards = document.querySelectorAll(".card1-left")
let roadmap_cards_2 = document.querySelectorAll(".card1-left-2")

roadmap_cards.forEach(elem => {
    
    tl_roadmap.from(elem, {
        x: -500,
        delay: 0.5,
        duration: 2,
        stagger: 3,
        scrollTrigger: {
            trigger: elem,
            scroller: "body",
            // markers: true, 
            start: "top bottom",
            end: "top bottom",
            scrub: 4,
    
        }
    })
})

roadmap_cards_2.forEach(elem => {
    
    tl_roadmap.from(elem, {
        x: 500,
        delay: 0.5,
        duration: 2,
        stagger: 3,
        scrollTrigger: {
            trigger: elem,
            scroller: "body",
            // markers: true, 
            start: "top bottom",
            end: "top bottom",
            scrub: 3,
    
        }
    })

})

//team

gsap.from("#team #team-main", {
    opacity: 0,
    scale: 0.7,
    scrollTrigger: {
        trigger: "#team",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 70%",
        scrub: 4 ,
        
    }
})

//footer
gsap.from("#footer-bottom", {
    opacity: 0,
    y:20,
    scale: 1.7,
    duration:1,
    scrollTrigger: {
        trigger: "#footer-bottom",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 70%",
        scrub: 3,
        
    }
})








 
