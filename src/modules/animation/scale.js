import gsap from "gsap";
import { Transform } from "./transform";
import { map, clamp } from "../../util/math.js";

export class Scale extends Transform {
  constructor({ element, wrapper }) {
    super({
      el: wrapper,
    });

    this.element = element;
    this.wrapper = wrapper;

    gsap.set(this.element, {
      scaleY: 0,
      transformOrigin: "top right",
    });

    setTimeout(() => this.resize(), 1000);
  }

  render() {
    let val = map(
      window?.app?.scroll?.y || 0, // value
      this.bounds.top, // low1
      this.bounds.bottom, // high1
      this.config.bounds[0],
      this.config.bounds[1] // low2, high2
    );

    val = clamp(0, 1, val);
    this.perc = val;

    this.element.style.transform = `scaleY(${val * 100}%)`;
  }
}
