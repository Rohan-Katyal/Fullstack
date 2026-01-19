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

//  SVG animations


var string = document.querySelector("#string");

var stringWidth = string.clientWidth;

var initPath = `M 10 150 Q ${0.5*stringWidth} 150 ${0.99*stringWidth} 150`;
var finalPath = `M 10 150 Q ${0.5*stringWidth} 150 ${0.99*stringWidth} 150`;

var stringPath = document.querySelector("#stringPath");

stringPath.setAttribute('d', initPath)

string.addEventListener("mousemove",function(coords){
    
    // console.log(`x : ${coords.offsetX} | y : ${coords.offsetY}`);
    
    function offsetYVal(val, offset){
        if(val <= 150){
            val = val - offset
        }
        else if(val > 150){
            val = val + offset
        }
        return val
    }

    var path = `M 10 150 Q ${coords.offsetX} ${offsetYVal(coords.offsetY, 15)} ${0.99*stringWidth} 150`;
    gsap.to("#stringPath",{
        attr : {d : path},
        duration : 0.3,
        ease : "power3.out"
    })
})

string.addEventListener("mouseleave",function(){
    gsap.to("#stringPath",{
        attr:{d : finalPath},
        ease : "elastic.out(1,0.05)",
        duration : 1.5
    })
})


var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x : dets.x-20,
        y : dets.y-30,
        duration : 2,
        ease : "circ.out"
    })
})