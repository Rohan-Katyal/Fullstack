var tl = gsap.timeline()

tl.from("#logo",{
    y: -20,
    opacity: 0,
    duration: 0.5,
    delay: 0.5
})

tl.from("#navItems h4",{
    y: -30,
    opacity: 0,
    duration: 0.7,
    stagger: 0.5
})

tl.from("#headingText",{
    y: -30,
    opacity: 0,
    duration: 1
})

tl.from("#headingText-pt2",{
    y: -30,
    opacity: 0,
    duration: 1
})

gsap.to("#textAnimation",{
    transform: "translateX(-246%)",
    scrollTrigger : {
        trigger: "#page2",
        scroller: "body",
        // markers: true,
        start: "top 0%",
        end: "top -400%",
        scrub: 2,
        pin: true
    }
})