/**
 * The 3D book in the hero. Each concern lives on its own nested wrapper so
 * the tweens never fight over the same transform:
 *
 *   .book-scroll  rotation + drift driven by scroll position
 *   .book-turn    entrance and click-to-spin
 *   .book-float   idle bob
 *   .book-tilt    follows the pointer
 *   .book         static resting pose (CSS)
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Options = { motion: boolean; finePointer: boolean };

export function initBook(el: HTMLElement, { motion, finePointer }: Options) {
  const q = <T extends HTMLElement>(sel: string) => el.querySelector<T>(sel)!;
  const scroll = q(".book-scroll");
  const turn = q(".book-turn");
  const float = q(".book-float");
  const tilt = q(".book-tilt");
  const sheen = q(".book-sheen");
  const shadowWrap = q(".book-shadow-wrap");
  const shadow = q(".book-shadow");
  const zone = el.closest<HTMLElement>("[data-book-zone]") ?? el;

  if (!motion) return;

  // Entrance: the book swings in from its edge and settles into its pose.
  gsap
    .timeline({ delay: 0.15, defaults: { duration: 2.2, ease: "expo.out" } })
    .fromTo(turn, { rotateY: -120, rotateX: 22, y: 140, opacity: 0 }, { rotateY: 0, rotateX: 0, y: 0, opacity: 1 })
    .fromTo(shadowWrap, { opacity: 0, scaleX: 0.3 }, { opacity: 1, scaleX: 1 }, 0);

  // Idle float, with the ground shadow breathing in sync.
  gsap.to(float, { y: -14, duration: 3.4, ease: "sine.inOut", yoyo: true, repeat: -1 });
  gsap.to(shadow, { scale: 0.84, opacity: 0.6, duration: 3.4, ease: "sine.inOut", yoyo: true, repeat: -1 });

  // Scroll: the book turns to show its spine and back as the hero leaves.
  const hero = el.closest<HTMLElement>("[data-book-zone]") ?? el;
  gsap
    .timeline({
      scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 1.2 },
    })
    .to(scroll, { rotateY: -165, rotateX: 8, y: 120, scale: 0.86, ease: "none" }, 0)
    .to(shadowWrap, { y: 120, opacity: 0, ease: "none" }, 0);

  // Pointer tilt, plus a light sweep that tracks the same motion.
  if (finePointer) {
    const rx = gsap.quickTo(tilt, "rotateX", { duration: 1, ease: "power3" });
    const ry = gsap.quickTo(tilt, "rotateY", { duration: 1, ease: "power3" });
    const sx = gsap.quickTo(sheen, "xPercent", { duration: 1, ease: "power3" });

    zone.addEventListener("pointermove", (event) => {
      const r = el.getBoundingClientRect();
      const nx = gsap.utils.clamp(-1, 1, (event.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2));
      const ny = gsap.utils.clamp(-1, 1, (event.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2));
      ry(nx * 22);
      rx(-ny * 14);
      sx(nx * 40);
    });
    zone.addEventListener("pointerleave", () => {
      rx(0);
      ry(0);
      sx(0);
    });
  }

  // Click for a full turn.
  let spinning = false;
  el.addEventListener("click", () => {
    if (spinning) return;
    spinning = true;
    gsap.to(turn, {
      rotateY: "+=360",
      duration: 1.8,
      ease: "expo.inOut",
      onComplete: () => {
        gsap.set(turn, { rotateY: 0 });
        spinning = false;
      },
    });
  });
}
