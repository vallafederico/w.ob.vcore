import { ShaderMaterial, DoubleSide } from "three";

import vertexShader from "./vertex.vert";
import fragmentShader from "./fragment.frag";

export default class extends ShaderMaterial {
  constructor(options) {
    super({
      vertexShader,
      fragmentShader,
    });

    this.uniforms = {
      u_time: { value: options?.u_time || 0 },
      u_t1: { value: options?.u_t1 || null },
      // u_spin_angle: { value: this.getSpinningUniform(options) || [0, 0, 0, 0] },
    };

    this.side = DoubleSide;
    // this.wireframe = true;
    // this.transparent= true;
  }

  set time(t) {
    this.uniforms.u_time.value = t;
  }
}
