import { assets } from "../../assets/";
import loadTexture from "./texture-loader";
import loadModel from "./model-loader";

export default class {
  constructor(data) {
    this.data = data;
  }

  async load() {
    console.time("load");

    const [model, mt_black, mt_gold, tx_faces, mt_metal] = await Promise.all([
      loadModel(assets.model),
      loadTexture(assets.mt_black),
      loadTexture(assets.mt_gold),
      loadTexture(assets.tx_faces),
      loadTexture(assets.mt_metal),
    ]);

    console.timeEnd("load");

    tx_faces.flipY = false;

    // SPLIT MODEL HERE
    return {
      model: model.scene,
      animations: model.animations,
      mt_black,
      mt_gold,
      tx_faces,
      mt_metal,
    };
  }
}
