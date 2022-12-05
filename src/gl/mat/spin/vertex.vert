#define MPI 3.1415926535897932384626433832795

uniform float u_time;
// uniform vec4 u_spin_angle;

varying vec2 v_uv;

#include "../_/rotate.glsl"


void main() {
  vec3 pos = position;

  // pos = rotate(pos, u_spin_angle.xyz * u_spin_angle.w, u_time * u_spin_angle.w);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  v_uv = uv;
}
