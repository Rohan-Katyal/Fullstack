// gsap.from(".box1",{
//     x : 500,
//     y: 50,
//     border: "solid green 4px",
//     borderRadius : "20%",
//     rotate: 360,
//     backgroundColor: "yellow",
//     duration : 2,
//     delay : 1
// })

// gsap.from(".box2",{
//     x : 500,
//     y : -50,
//     backgroundColor: "blue",
//     rotate: 360,
//     borderRadius: "100%",
//     duration: 2,
//     delay: 1,
// })

// gsap.from(".box3",{
//     y: 50,
//     backgroundColor : "white",
//     borderRadius: "10%",
//     opacity: 1,
//     duration: 2,
//     delay: 1,
// })

var tl = gsap.timeline()

tl.from(".box2",{
    x: 405,
    y: -50,
    rotate: 360,
    backgroundColor: "green",
    borderRadius: "100%",
    duration: 2,
    delay: 1
})

tl.from(".box1",{
    x: 500,
    y: 50,
    rotate: 360,
    backgroundColor: "yellow",
    border: "solid green 4px",
    borderRadius: "20%",
    duration: 2
})

tl.from(".box3",{
    y: 48,
    backgroundColor: "white",
    borderRadius: "10%",
    opacity: 1,
    duration: 2,
})