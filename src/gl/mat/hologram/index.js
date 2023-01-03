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
      u_tx_faces: { value: tx_faces },
      u_face_swap: { value: 0 },
      u_alpha: { value: 0 },
    };

    this.side = DoubleSide;
    // this.wireframe = true;

    this.transparent = true;
    // this.blending = SubtractiveBlending;

    // swap faces
    setInterval(() => {
      this.face_swap = Math.floor(Math.random() * 5);
      // console.log(this.uniforms.u_face_swap.value);
    }, 5000);
  }

  set time(t) {
    this.uniforms.u_time.value = t;
  }

  set face_swap(v) {
    this.uniforms.u_face_swap.value = v;
  }

  set alpha(v) {
    this.uniforms.u_alpha.value = v;
  }
}
