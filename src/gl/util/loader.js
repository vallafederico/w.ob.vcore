import { assets } from "../../assets/";
import loadTexture from "./texture-loader";
import loadModel from "./model-loader";

export default class {
  constructor(data) {
    this.data = data;
  }

  async load() {
    console.time("load");

    const [model, mt_black, mt_gold] = await Promise.all([
      loadModel(assets.model),
      loadTexture(assets.mt_black),
      loadTexture(assets.mt_gold),
    ]);

    console.timeEnd("load");

    // SPLIT MODEL HERE
    return {
      model,
      mt_black,
      mt_gold,
    };
  }
}
