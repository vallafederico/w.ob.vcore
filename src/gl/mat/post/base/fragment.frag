
uniform float opacity;
uniform sampler2D tDiffuse;
uniform float u_dark;
uniform float u_time;
uniform float u_intro;


varying vec2 vUv;

#include "../../_/noise.glsl"


const vec3 COL_BG = vec3(0.047058823529411764, 0.047058823529411764, 0.047058823529411764);

void main() {
    // textures
    vec3 tx_scene = texture2D(tDiffuse, vUv).rgb;
    vec3 tx_scene_dark = mix(COL_BG, tx_scene.rrr, .00);

    // mix
    vec3 final_col = mix(tx_scene, tx_scene_dark, u_dark);

    final_col = mix(COL_BG, final_col, u_intro); // intro fade


    gl_FragColor.rgb = final_col;
    gl_FragColor.a = 1.;
}