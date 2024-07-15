import gsap from "gsap";

export const scrollAnimation = (position, target, onUpdate) =>{
    const tl = gsap.timeline();

    tl.to(position,{
        x:-3.8052209165,
        y:2.9883838078,
        z:2.9832284701,
        scrollTrigger:{
            trigger:'.skill-main',
            start:'top bottom',
            end:'top top',
            scrub: 2,
        },
        onUpdate
    })

    tl.to(target,{
        x:1.6199412264,
        y:0.567467053,
        z:0.7353603176,
        scrollTrigger:{
            trigger:'.skill-main',
            start:'top bottom',
            end:'top top',
            scrub: 2,
        }
    })
}