import { assets } from "../../assets/";
// import loadTexture from "./texture-loader";
import loadModel from "./model-loader";

export default class {
  constructor(data) {
    this.data = data;
  }

  async load() {
    console.time("load");

    const [model] = await Promise.all([loadModel(assets.model)]);

    console.timeEnd("load");

    // SPLIT MODEL HERE
    return {
      model,
    };
  }
}
