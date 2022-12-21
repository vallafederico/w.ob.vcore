import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

// const dracoLoader = new DRACOLoader();
// dracoLoader.setDecoderPath("js/libs/draco/");
// dracoLoader.setDecoderConfig({ type: "js" });

const loader = new GLTFLoader();

export default (url, id) => {
  return new Promise((resolve, reject) => {
    loader.load(url, (gltf) => {
      // const result = { model: gltf.scene };
      // console.log(gltf);
      const { scene, animations } = gltf;
      // window.gl.animations = animations;
      resolve(gltf);
    });
  });
};
