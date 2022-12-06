
uniform float opacity;
uniform sampler2D tDiffuse;
uniform float u_dark;


varying vec2 vUv;

const vec3 COL_BG = vec3(0.047058823529411764, 0.047058823529411764, 0.047058823529411764);

void main() {
    // textures
    vec3 tx_scene = texture2D(tDiffuse, vUv).rgb;
    vec3 tx_scene_dark = mix(COL_BG, tx_scene.rrr, .05);

    // mix
    vec3 final_col = mix(tx_scene, tx_scene_dark, u_dark);

    gl_FragColor.rgb = final_col;
    gl_FragColor.a = 1.;
}