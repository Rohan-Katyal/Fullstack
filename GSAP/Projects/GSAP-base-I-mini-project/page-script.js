var tl = gsap.timeline()

tl.from("#logo",{
    y: -20,
    opacity: 0,
    duration: 0.5,
    delay: 0.5
})

tl.from("#navbar",{
    y: -30,
    opacity: 0,
    duration: 0.7,
    stagger: 0.5
})

// tl.from("#navItems h4",{
//     y: -30,
//     opacity: 0,
//     duration: 0.7,
//     stagger: 0.5
// })


function headingBreak(){
    
var heading = document.querySelector('#headingText');
var headingText = heading.textContent;

var splittedHeading = headingText.split("");
var midofHeading = splittedHeading.length/2;

var spantextVar = "";

splittedHeading.forEach(function(e,i){
    // console.log(e,i)
    if(i < midofHeading){
        spantextVar += `<span class="social">${e}</span>`    
    }
    else if (i == midofHeading){
        spantextVar += `<span class="dash">${e}</span>`
    }
    else{
        spantextVar += `<span class="craft">${e}</span>`
    }    
})


heading.innerHTML = spantextVar;
}

headingBreak();

gsap.from('.social', {
    y : 100,
    opacity: 0,
    duration : 0.5,
    delay : 0.2,
    stagger: 0.2
})

gsap.from('.craft',{
    y : 100,
    opacity: 0,
    duration : 0.5,
    delay : 0.2,
    stagger : -0.2
})

gsap.from('.dash',{
    y : 100,
    opacity: 0,
    duration : 2,
    delay : 0.2,
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
        x : dets.x+10,
        y : dets.y+10,
        duration : 2,
        ease : "circ.out"
    })
})


var menu = document.querySelector("#navbar i");
var close = document.querySelector("#full i");

var tl = gsap.timeline();


tl.to("#full",{
    right: 0,
    duration: 0.5
})

tl.from("#full h4",{
    x : 150,
    duration: 0.35,
    opacity : 0,
    stagger : 0.32
})

tl.from("#full i",{
    opacity: 0
})

tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})

close.addEventListener("click",function(){
    tl.reverse()
})

