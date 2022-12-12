import { ShaderMaterial, DoubleSide } from "three";

import vertexShader from "./vertex.vert";
import fragmentShader from "./fragment.frag";

export default class extends ShaderMaterial {
  constructor(options) {
    super({
      vertexShader,
      fragmentShader,
    });

    const { tx_faces } = window.app.gl.assets;

    this.uniforms = {
      u_time: { value: options?.u_time || 0 },
      u_mt_black: { value: tx_faces },
    };

    this.side = DoubleSide;
    // this.wireframe = true;

    this.transparent = true;
    // this.blending = SubtractiveBlending;
  }

  set time(t) {
    this.uniforms.u_time.value = t;
  }
}
