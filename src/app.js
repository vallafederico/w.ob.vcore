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

window.isEditorView = false;
observeEditor();

window.app = new App();

// signature
function printSignature() {
  const style =
    "font-size:10px; color:#fff; background:#000; padding: 5px 10px;";
  console.log("%cSite by offbrand. https://www.itsoffbrand.com/", style);
}

// editor view
function addStopTrigger() {
  const btn = document.querySelector(".w-editor-bem-EditSiteButton");
  const bar = document.querySelector(".w-editor-bem-EditorMainMenu");
  if (btn) {
    btn.addEventListener("click", () => {
      console.log("stopped the f'in scroll because editor is open");
      window.app.scroll.destroy();
    });
  }

  if (bar) {
    bar.addEventListener("click", () => {
      console.log("stopped the f'in scroll because editor is open");
      window.app.scroll.destroy();
    });
  }
}

function observeEditor() {
  const html = document.documentElement;

  const event = new Event("editorToggle");
  const config = { attributes: true, childList: false, subtree: false };

  const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
      if (
        mutation.type === "attributes" &&
        html.classList.contains("w-editor")
      ) {
        // window.isEditorView = true;
        // window.dispatchEvent(event);
        addStopTrigger();
      } else {
        // window.isEditorView = false;
        // window.dispatchEvent(event);
        addStopTrigger();
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(html, config);
}
