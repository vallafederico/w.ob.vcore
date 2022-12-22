import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
// const dracoLoader = new DRACOLoader();
// const path = "https://www.gstatic.com/draco/v1/decoders/";
// dracoLoader.setDecoderPath(path);
// dracoLoader.setDecoderConfig({ type: "js" });

const loader = new GLTFLoader();

export default (url, id) => {
  return new Promise((resolve, reject) => {
    loader.load(url, (gltf) => {
      const { scene, animations } = gltf;
      resolve(gltf);
    });
  });
};
