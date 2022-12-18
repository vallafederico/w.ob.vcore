import gsap from "gsap";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";

import fragmentShader from "./fragment.frag";
import vertexShader from "./vertex.vert";

export const CopyShader = {
  uniforms: {
    tDiffuse: { value: null },
    opacity: { value: 1.0 },
    u_dark: { value: 0.0 },
    u_time: { value: 0.0 },
    u_intro: { value: 0.0 },
  },
  vertexShader,
  fragmentShader,
};

export class Shader extends ShaderPass {
  constructor() {
    super(CopyShader);

    this.open();
  }

  set dark(value) {
    if (this.toDark) this.toDark.kill();
    this.toDark = gsap.to(this.uniforms.u_dark, {
      duration: 0.4,
      value,
      ease: "power3.out",
    });
  }

  set time(value) {
    this.uniforms.u_time.value = value;
  }

  open() {
    gsap.to(this.uniforms.u_intro, {
      duration: 0.8,
      value: 1,
      delay: 0.4,
      ease: "expo.in",
    });
  }
}
