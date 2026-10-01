/**
 * Site-wide motion: smooth scroll, section reveals, the hero book and a few
 * quiet interactions. Motion is applied to whole sections, never to
 * individual words or lines, so text always reads as a single block.
 *
 * Everything that hides content before animating it is gated on the
 * `motion` class, which an inline script in <head> only adds when the
 * visitor has not asked for reduced motion (and removes again if this
 * module never boots). With motion off, the page renders fully static.
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { initBook } from "./book";

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    __motion?: boolean;
    __lenis?: Lenis;
  }
}

const root = document.documentElement;
const motion = root.classList.contains("motion");
const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
const EASE = "expo.out";

window.__motion = true;

function headerOffset() {
  return -(document.querySelector<HTMLElement>("[data-site-header]")?.offsetHeight ?? 72);
}

function smoothScroll() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });
  window.__lenis = lenis;
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Same-page anchors glide instead of jumping.
  document.addEventListener("click", (event) => {
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href*='#']");
    if (!link) return;
    const url = new URL(link.href);
    if (url.pathname !== location.pathname || !url.hash) return;
    const target = document.querySelector(decodeURIComponent(url.hash));
    if (!target) return;
    event.preventDefault();
    lenis.scrollTo(target as HTMLElement, { offset: headerOffset() });
    history.pushState(null, "", url.hash);
  });
}

function scrollTo(target: number | HTMLElement) {
  if (window.__lenis) window.__lenis.scrollTo(target, { offset: typeof target === "number" ? 0 : headerOffset() });
  else if (typeof target === "number") window.scrollTo({ top: target, behavior: "smooth" });
  else target.scrollIntoView({ behavior: "smooth" });
}

function header() {
  const el = document.querySelector<HTMLElement>("[data-site-header]");
  let lastY = window.scrollY;

  const update = () => {
    const y = window.scrollY;
    root.classList.toggle("scrolled", y > 8);
    if (el) {
      const hide = motion && y > 320 && y > lastY + 2;
      const show = y < lastY - 2 || y <= 320;
      if (hide) el.classList.add("is-hidden");
      else if (show) el.classList.remove("is-hidden");
    }
    lastY = y;
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  el?.addEventListener("focusin", () => el.classList.remove("is-hidden"));
}

function readingProgress() {
  const bar = document.getElementById("read-progress");
  if (!bar) return;
  gsap.to(bar, {
    scaleX: 1,
    ease: "none",
    scrollTrigger: { start: 0, end: "max", scrub: true },
  });
}

function backToTop() {
  document.getElementById("back-to-top")?.addEventListener("click", (event) => {
    event.preventDefault();
    scrollTo(0);
  });
}

/**
 * One-shot "play when it scrolls into view". IntersectionObserver rather than
 * ScrollTrigger: it stays correct across instant jumps (hash links) and late
 * layout shifts (web fonts). Elements that enter together are
 * delivered as one batch so they can be staggered.
 */
function whenVisible(els: Element[], onEnter: (batch: HTMLElement[]) => void, rootMargin = "0px 0px -8% 0px") {
  let queue: HTMLElement[] = [];
  let scheduled = false;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        queue.push(entry.target as HTMLElement);
      });
      if (!queue.length || scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        const batch = queue;
        queue = [];
        scheduled = false;
        onEnter(batch);
      });
    },
    { rootMargin }
  );
  els.forEach((el) => io.observe(el));
}

function reveals() {
  const els = gsap.utils.toArray<HTMLElement>("[data-reveal], .animate");
  whenVisible(els, (batch) =>
    gsap.to(batch, {
      opacity: 1,
      y: 0,
      duration: 1.4,
      ease: EASE,
      stagger: 0.12,
      overwrite: true,
      // Hand control back to CSS once revealed, so hover states can use opacity/transform.
      onComplete: () => {
        batch.forEach((el) => el.classList.add("is-in"));
        gsap.set(batch, { clearProps: "opacity,transform" });
      },
    })
  );
}

function marquees() {
  gsap.utils.toArray<HTMLElement>("[data-marquee]").forEach((track) => {
    const dir = Number(track.dataset.marquee) || -1;
    gsap.fromTo(
      track,
      { xPercent: dir < 0 ? 0 : -25 },
      {
        xPercent: dir < 0 ? -25 : 0,
        ease: "none",
        scrollTrigger: {
          trigger: track.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      }
    );
  });
}

function parallax() {
  gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
    const amount = Number(el.dataset.parallax) || 10;
    gsap.fromTo(
      el,
      { yPercent: -amount },
      {
        yPercent: amount,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      }
    );
  });
}

function magnetic() {
  if (!finePointer) return;
  gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((el) => {
    const x = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3" });
    const y = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3" });
    el.addEventListener("pointermove", (event) => {
      const r = el.getBoundingClientRect();
      x((event.clientX - (r.left + r.width / 2)) * 0.28);
      y((event.clientY - (r.top + r.height / 2)) * 0.4);
    });
    el.addEventListener("pointerleave", () => {
      x(0);
      y(0);
    });
  });
}

function init() {
  header();
  backToTop();
  readingProgress();

  const book = document.querySelector<HTMLElement>("[data-book]");

  if (!motion) {
    if (book) initBook(book, { motion: false, finePointer });
    return;
  }

  smoothScroll();
  reveals();
  marquees();
  parallax();
  magnetic();
  if (book) initBook(book, { motion: true, finePointer });

  // Web fonts change section heights, so re-measure once they are in.
  document.fonts.ready.then(() => {
    ScrollTrigger.refresh();

    // Arriving on /#section from another page: re-aim once layout has settled,
    // landing just below the sticky header.
    if (location.hash) {
      const target = document.querySelector<HTMLElement>(decodeURIComponent(location.hash));
      if (target) window.__lenis?.scrollTo(target, { offset: headerOffset(), immediate: true, force: true });
    }
  });
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();
