uniform float u_time;
uniform sampler2D u_mt_black; 

varying vec2 v_uv;
varying vec3 v_normal;
varying vec3 v_view;

// const float FACE_POS = .0;
const float rgb_fac = .005;

#include "../_/noise.glsl"


void main() {
  float circ_grad = smoothstep(
    .8, .1, 
    distance(v_uv, vec2(.5))
  );

  float FACE_POS = 0.;
  // if (u_time > 5.) {
  //   FACE_POS = .5;
  // };


  // image managing
  vec2 t_uv = vec2(
    v_uv.x * .5 + FACE_POS, 
    v_uv.y * .5
  );

  // rgb image
  float imgr = texture2D(u_mt_black, t_uv + vec2(rgb_fac * sin(u_time), 0.)).r;
  float imgg = texture2D(u_mt_black, t_uv + vec2(0., rgb_fac * cos(u_time))).g;
  float imgb = texture2D(u_mt_black, t_uv + vec2(-rgb_fac * atan(u_time), 0.)).b;
  vec3 imgrgb = vec3(imgr, imgg, imgb);
  

  // scanlines
  float scanlines = step(.2, fract((v_uv.y + u_time) * 60.));
  float ns = cnoise(vec3(v_uv.x * 2., v_uv.y * 3., u_time * 3.)) * 1. - circ_grad;

  float imga = texture2D(u_mt_black, t_uv).a * (circ_grad * scanlines) + (ns * circ_grad);  


  gl_FragColor.rgb = imgrgb;
  gl_FragColor.a = imga;

  // gl_FragColor.rgb = vec3(ns);
  // gl_FragColor.a = 1.;
}
 



/*
void main() {
  float circ_grad = smoothstep(
    .8, .1, 
    distance(v_uv, vec2(.5))
  );


  // image managing
  vec2 t_uv = vec2(
    v_uv.x * .5 + FACE_POS, 
    v_uv.y * .5
  );

  // rgb image
  float imgr = texture2D(u_mt_black, t_uv + vec2(rgb_fac * sin(u_time), 0.)).r;
  float imgg = texture2D(u_mt_black, t_uv + vec2(0., rgb_fac * cos(u_time))).g;
  float imgb = texture2D(u_mt_black, t_uv + vec2(-rgb_fac * atan(u_time), 0.)).b;
  vec3 imgrgb = vec3(imgr, imgg, imgb);
  

  // scanlines
  float scanlines = step(.2, fract((v_uv.y + u_time) * 60.));
  float ns = cnoise(vec3(v_uv.x * 2., v_uv.y * 2., u_time * 2.)) * 1. - circ_grad;

  float imga = texture2D(u_mt_black, t_uv).a * circ_grad * scanlines + ns;  


  gl_FragColor.rgb = imgrgb;
  gl_FragColor.a = imga;

  // gl_FragColor.rgb = vec3(ns);
  // gl_FragColor.a = 1.;
}
 

*/