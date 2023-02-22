gsap.from(".logo", {
  x: -200,
  duration: 1,
  autoAlpha: 0,
});

gsap.from(".menu-links", {
  delay: 2,
  x: -200,
  duration: 1,
  autoAlpha: 0,
});

gsap.from(".title", {
  delay: 4,
  y: 200,
  duration: 1,
  autoAlpha: 0,
});

gsap.from(".tagline, .two, .desc", {
  delay: 6,
  y: 50,
  duration: 1,
  autoAlpha: 0,
});

gsap.from(".beer", { autoAlpha: 0, delay: 8, duration: 1, y: -50 });

gsap.to("img", {
  autoAlpha: 1,
  delay: 8,
  duration: 1.5,
  y: 100,
  ease: "BounceInOut",
  yoyo: true,
  repeat: -1,
});
