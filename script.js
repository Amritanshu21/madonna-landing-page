gsap.from("#cleft",{
    x:-2000,duration:2
})

gsap.from("#cright",{
    x:2000,duration:2
})
gsap.to("#cleft",{
    opacity:0,delay:2.2
})
gsap.to("#cright",{
    opacity:0,delay:2.2
})
gsap.from("#hero",{
    y:-2000,delay:2,duration:2.4
})
gsap.from("#nav2 h1",{
    y:100,delay:2.4,duration:2.5,opacity:1
})
gsap.from("#page1",{
    y:200,delay:2.7,duration:2,opacity:1
})

gsap.from("#page2",{
y:2000,duration:2,delay:2.7
})
var cafe =document.querySelector("#ctop img");
var ctop = document.querySelector("#ctop")
   cafe.addEventListener("mouseenter",function(){
    cafe.style.opacity=0
    ctop.style.scale=1.2
    cafe.style.duration=2
   })
cafe.addEventListener("mouseleave",function(){
cafe.style.opacity=1
ctop.style.scale=1
cafe.style.duration=1
})



var resto =document.querySelector("#rtop img");
var rtop= document.querySelector("#rtop")
   resto.addEventListener("mouseenter",function(){
    resto.style.opacity=0
    rtop.style.scale=1.2
    resto.style.duration=2
   })
resto.addEventListener("mouseleave",function(){
resto.style.opacity=1
rtop.style.scale=1
resto.style.duration=1
})
var bar =document.querySelector("#btop img");
var btop = document.querySelector("#btop")
  bar.addEventListener("mouseenter",function(){
    bar.style.opacity=0
    btop.style.scale=1.2
    bar.style.duration=2
   })
bar.addEventListener("mouseleave",function(){
bar.style.opacity=1
btop.style.scale=1
bar.style.duration=1
})