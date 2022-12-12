uniform float u_time;
uniform sampler2D u_tx_faces; 
uniform float u_face_swap;
uniform float u_alpha;

varying vec2 v_uv;
varying vec3 v_normal;
varying vec3 v_view;

const float rgb_fac = .009;

#include "../_/noise.glsl"


void main() {
  float re_time = u_time * 2.;
  float circ_grad = smoothstep(
    .8, .1, 
    distance(v_uv, vec2(.5))
  );

  // image managing
  vec2 t_uv = vec2(
    v_uv.x * .5 + u_face_swap, 
    v_uv.y * .5
  );

  // rgb image
  float imgr = texture2D(u_tx_faces, t_uv + vec2(rgb_fac * sin(re_time), 0.)).r;
  float imgg = texture2D(u_tx_faces, t_uv + vec2(0., rgb_fac * cos(re_time))).g;
  float imgb = texture2D(u_tx_faces, t_uv + vec2(-rgb_fac * atan(re_time), 0.)).b;
  vec3 imgrgb = vec3(imgr, imgg, imgb);
  

  // scanlines
  float scanlines = step(.2, fract((v_uv.y + u_time) * 60.));
  float ns = cnoise(vec3(v_uv.x * 2., v_uv.y * 3., re_time)) * 1. - circ_grad;

  float imga = texture2D(u_tx_faces, t_uv).a * (circ_grad * scanlines) + (ns * circ_grad);  


  gl_FragColor.rgb = imgrgb;
  gl_FragColor.a = (imga * 2. * circ_grad) - u_alpha;
  // gl_FragColor.a = imga * (20. - u_alpha);
}
 


