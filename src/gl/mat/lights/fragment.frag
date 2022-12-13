uniform float u_time;
uniform sampler2D u_mt_black; 

varying vec2 v_uv;
varying vec3 v_normal;
varying vec3 v_view;

void main() {

  vec3 x = normalize( vec3(v_view.z, 0., -v_view.x));
  vec3 y = cross(v_view, x);
  vec2 fakeUv = vec2( dot(x, v_normal), dot(y, v_normal)) * .495 + .5;
  vec4 img = texture2D(u_mt_black, fakeUv);

  // gl_FragColor.rgb = img.rgb;
  gl_FragColor.rgb = vec3(1., 1., 1.);
  gl_FragColor.a = 1.;
  // gl_FragColor = vec4(1., 0., 0., 1.);
}
