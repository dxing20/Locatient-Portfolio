import Particles from "react-tsparticles";

import React from "react";

const ParticleBubbles = () => {
  return (
    <Particles
      style={{ position: "absolute" }}
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "attract",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 100,
              duration: 2,
              opacity: 1,
              size: 10,
            },
            attract: { distance: 100, duration: 1, factor: 4 },
          },
        },
        particles: {
          color: {
            value: "#5C6BC0",
          },
          links: {
            color: "#9FA8DA",
            distance: 250,
            enable: true,
            opacity: 0.5,
            width: 2,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "out",
            random: false,
            speed: 5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 20,
          },
          opacity: {
            anim: { enable: true, opacity_min: 0.3, speed: 1, sync: false },
            random: false,
            value: 0.7,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBubbles;
