import { Vector2 } from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";

import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";

import { Shader } from "./mat/post/base";

import { Observe } from "../util/observe.js";

export class Post extends EffectComposer {
  constructor({ renderer, scene, camera }) {
    super(renderer);
    this.isOn = true;
    this.renderer = renderer;

    this.renderPass = new RenderPass(scene, camera);
    this.addPass(this.renderPass);

    this.createPasses();
    this.addEvents();
  }

  createPasses() {
    this.bloomPass = new UnrealBloomPass(
      new Vector2(window.innerWidth, window.innerHeight),
      3, // strength
      0.05, // radius
      0.8 // threshold
    );

    this.addPass(this.bloomPass);

    this.shader = new Shader();
    this.addPass(this.shader);
  }

  renderPasses(t) {
    this.shader.time = t;
  }

  addEvents() {
    // dark section as cards background
    const cardTrackEl = document.querySelector('[data-gl-track="cards"]');
    if (cardTrackEl)
      new Observe({
        element: cardTrackEl,
        config: {
          threshold: 0,
        },
      })
        .on("IN", () => {
          // console.log("in");
          this.shader.dark = 1;
        })
        .on("OUT", () => {
          // console.log("out");
          this.shader.dark = 0;
        });

    const footerTrackEl = document.querySelector('[data-gl-track="footer"]');
    if (footerTrackEl)
      new Observe({
        element: footerTrackEl,
        config: {
          threshold: 0,
        },
      })
        .on("IN", () => {
          // console.log("in");
          this.shader.dark = 1;
        })
        .on("OUT", () => {
          // console.log("out");
          this.shader.dark = 0;
        });
  }
}
