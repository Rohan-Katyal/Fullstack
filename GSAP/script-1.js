// gsap.to(".box1",{
//     x: 500,
//     y: 50,
//     backgroundColor: "yellow",
//     border: "solid green",
//     borderRadius: "20%",
//     rotate: 360,
//     duration: 1.5,
//     delay:1
// })

// gsap.to(".box2",{
//     x: 410,
//     y: -50,
//     backgroundColor: "green",
//     border: "solid yellow",
//     borderRadius: "50%",
//     rotate: 360,
//     duration: 1.5,
//     delay: 1
// })

// gsap.to(".box3",{
//     y: 40,
//     backgroundColor: "white",
//     borderRadius: "10%",
//     opacity: 1,
//     duration: 1.3,
//     delay: 2.6
// })

var tl = gsap.timeline()

tl.to(".box3", {
    y : 40,
    backgroundColor: "white",
    borderRadius: "10%",
    opacity: 1,
    duration: 1.3,
    delay:1
})

tl.to(".box1",{
    x:500,
    y:50,
    backgroundColor: "yellow",
    border: "solid green 4px",
    borderRadius: "20%",
    rotate : 360,
    duration: 1.5
})

tl.to(".box2",{
    x : 410,
    y : -50,
    backgroundColor: "green",
    borderRadius: "50%",
    rotate: 360,
    duration: 1.5,
})

