import { assets } from "../../assets/";
// import loadTexture from "./texture-loader";
import loadModel from "./model-loader";

export default class {
  constructor(data) {
    this.data = data;
  }

  async load() {
    const [model] = await Promise.all([loadModel(assets.model)]);

    return {
      model,
    };
  }
}
