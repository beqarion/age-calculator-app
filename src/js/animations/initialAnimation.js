import anime from "animejs/lib/anime.es.js"

export default function initialAnimation() {
  anime
    .timeline({
      // easing: "easeOutExpo",
    })
    .add({
      targets: "#age-calculator",
      duration: 1000,
      opacity: [0, 1],
      translateY: ["-100%", 0],
    })
    .add(
      {
        targets: "#submit-btn",
        easing: "easeOutExpo",
        opacity: [0, 1],
        "margin-right": ["100vw", 0],
        rotateZ: [-720, 0],
      },
      "-=500"
    )
    .add(
      {
        targets: "#results p",
        opacity: [0, 1],
        translateX: ["100%", 0],
      },
      "-=500"
    )
    .add(
      {
        targets: "#results span",
        opacity: [0, 1],
        translateY: ["-100%", 0],
      },
      "-=500"
    )
    .add(
      {
        targets: ".labels",
        translateY: [0, "-15%", "3%", 0],
        delay: anime.stagger(100),
        easing: "linear",
      },
      "-=980"
    )
}
