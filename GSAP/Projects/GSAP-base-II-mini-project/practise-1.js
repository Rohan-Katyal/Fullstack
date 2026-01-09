gsap.to("#text1",{
    transform:"translateX(-700%)",
    scrollTrigger : {
        trigger: "#section1",
        scroller : "body",
        // markers: true,
        start: "top 0%",
        end: "top -650%",
        scrub: 2,
        pin : true
    }
})

gsap.to("#text2",{
    transform: "translateX(-650%)",
    scrollTrigger:{
        trigger : "#section2",
        scroller : "body",
        markers : true,
        start : "top 0%",
        end : "top -650%",
        scrub : 3,
        pin : true
    }
})


gsap.to("#text3",{
    transform : "translateX(-650%)",
    scrollTrigger : {
        trigger : "#section3",
        scroller: "body",
        markers : true,
        start: "top 0%",
        end : "top -650%",
        scrub : 4,
        pin : true
    }
})

gsap.to("#text4",{
    transform : "translateX(-650%)",
    scrollTrigger:{
        trigger : "#section4",
        scroller : "body",
        markers : true,
        start : "top 0%",
        end : "top -650%",
        scrub : 5,
        pin : true
    }
})