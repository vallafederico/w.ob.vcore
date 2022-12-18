import Dom from "./modules/dom";
import Viewport from "./modules/viewport";
import Scroll from "./modules/scroll";
import Gl from "./gl/gl";

class App {
  constructor() {
    this.body = document.querySelector("body");
    this.viewport = new Viewport();
    printSignature();

    this.time = 0;

    this.init();
  }

  init() {
    this.scroll = new Scroll();

    this.dom = new Dom();

    this.gl = new Gl("[data-gl='c']");

    this.initEvents();
    this.render();
  }

  initEvents() {
    // prettier-ignore
    new ResizeObserver((entry) => this.resize(entry[0])).observe(this.body);
  }

  resize({ contentRect }) {
    this.viewport?.resize();
    this.dom?.resize();
  }

  render() {
    // this.time += 0.1;
    this.scroll?.render();

    window.requestAnimationFrame(this.render.bind(this));
  }

  /* Events */
}

window.app = new App();

function printSignature() {
  const style =
    "font-size:10px; color:#fff; background:#000; padding: 5px 10px;";
  console.log("%cSite by offbrand. https://www.itsoffbrand.com/", style);
  // console.log("%chttps://www.itsoffbrand.com/", style);
}
