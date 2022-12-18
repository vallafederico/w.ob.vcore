import gsap from "gsap";

export class Mobile {
  constructor() {
    this.wrapper = document.querySelector("[data-mm='w']");
    this.btns = {
      open: document.querySelector("[data-mm='open']"),
      close: document.querySelector("[data-mm='close']"),
      isOpen: false,
    };

    // console.log("mobile", this.wrapper, this.btns);
    this.init();
  }

  init() {
    gsap.set(this.wrapper, { autoAlpha: 0 });
    this.wrapper.display = "none";

    this.btns.open.addEventListener("click", () => {
      if (this.isOpen) return;
      this.open();
      this.isOpen = true;
      console.log("open");
    });
    this.btns.close.addEventListener("click", () => {
      this.close();

      console.log("close");
    });
  }

  open() {
    this.wrapper.display = "flex";
    gsap.to(this.wrapper, { autoAlpha: 1, duration: 0.5 });
  }

  close() {
    gsap.to(this.wrapper, {
      autoAlpha: 0,
      duration: 0.5,
      onComplete: () => {
        this.isOpen = false;
        this.wrapper.display = "none";
      },
    });
  }
}
