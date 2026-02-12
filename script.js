var circle= document.querySelector("#circle");
var frame =document.querySelector(".frame");

window.addEventListener("mousemove", function(dets){
    gsap.to(circle,{
        x:dets.clientX,
        y:dets.clientY,
        duration: .3,
        ease:"expo"
    })
})

frame.addEventListener("mousemove", function(dets){
    gsap.to(circle,{
        scale:8
    })

    gsap.to(".frame span",{
        color:"#fff",
        duration:.3,
        y:"-5vw"
    })
})

frame.addEventListener("mouseleave", function(dets){
    gsap.to(circle,{
        scale:1
    })
    gsap.to(".frame span",{
        color:"#000",
        duration:.3,
        y:0
    })
})