export class Transform {
  constructor({ el }) {
    this.el = el;
    // console.log("transform", el);

    this.resize();
  }

  resize() {
    this.bounds = this.el.getBoundingClientRect();
    // console.log(this.bounds.height);
  }

  render() {
    this.perc = window.app.scroll.y / this.bounds.height;
    if (this.perc > 0.99999) this.perc = 0.99999;
    if (this.perc === 0) this.perc = 0.005;
    // console.log(this.perc);
  }
}
