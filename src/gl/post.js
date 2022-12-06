// import { Vector2 } from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
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
    this.shader = new Shader();
    this.addPass(this.shader);
  }

  renderPasses(t) {}

  addEvents() {
    // dark section as cards background
    new Observe({
      element: document.querySelector('[data-gl-track="cards"]'),
    })
      .on("IN", () => {
        // console.log("in");
        this.shader.dark = 1;
      })
      .on("OUT", () => {
        // console.log("out");
        this.shader.dark = 0;
      });

    new Observe({
      element: document.querySelector('[data-gl-track="footer"]'),
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

  //   render(t) {}
}
