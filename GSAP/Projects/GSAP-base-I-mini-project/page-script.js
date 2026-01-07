var tl = gsap.timeline()

tl.from("#logo",{
    y: -30,
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