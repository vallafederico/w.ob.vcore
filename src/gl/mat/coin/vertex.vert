#define MPI 3.1415926535897932384626433832795

uniform float u_time;
varying vec2 v_uv;
varying vec3 v_normal;
varying vec3 v_view;


void main() {
  vec3 pos = position;


  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);


  
  v_uv = uv;
  v_normal = vec4(vec4(normal, 1.) * modelViewMatrix).xyz;
  v_view = normalize(- gl_Position.xyz);
}
