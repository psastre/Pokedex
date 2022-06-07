import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Animate(){
    let sections = gsap.utils.toArray(".thumb-container");
    
  
    gsap.to(sections,{
        opacity: 1,
        delay:1,
        ease: "power2.out",
        duration: 3.3
        }
    );
    

    
gsap.to(sections, {
  xPercent: -17 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".main",
    pin: true,
    scrub: 2,
    
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3500",
  }
});


}