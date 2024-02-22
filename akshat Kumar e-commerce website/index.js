var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove", function(dets){
  crsr.style.left = dets.x+"px"
  crsr.style.top = dets.y+"px"
})




gsap.to("#nav",{
    backgroundColor : "#000",
    height: "80px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -1%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
        markers: true,
        start:"top -30%",
        end: "top -80%",
        scrub:2
    }
})

// var h4all = document.querySelectorAll("#nav h4")
// h4all.forEach(function(elm){
//     elm.addEventListener("mouseenter", function(){
//         crsr.style.scale = 3
//         crsr.style.border = "1px solid #fff"
//         crsr.style.backgroundColor = "transparent"
//     })
// })

gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    sccrollTrigger:{
        trigger:"about-us",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:5
    }
})
gsap.from(".cards",{
   scale: 0.8,
    opacity:0,
    duration:1,
    sccrollTrigger:{
        trigger:".cards",
        scroller:"body",
        markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})
gsap.from("#colon-1",{
    y:-70,
    x:-70,
    scrollTrigger:{
       trigger:"colon-1",
       scroller:"body",
       markers:true,
       start:"top 55%",
       end:"top 45%",
       scrub:4
    }
})