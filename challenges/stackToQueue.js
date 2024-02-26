//* implement a stack using queues as the underlying data structure
class stackToQueue {
  constructor() {
    this.top = [];
    this.bottom = [];
  }

  push(value) {
    this.bottom.push(value);
  }

  pop() {
    while (this.bottom.length > 1) {
      this.top.push(this.bottom.shift());
    }
    const result = this.bottom.shift();
    while (this.top.length > 0) {
      this.bottom.push(this.top.shift());
    }
    return result;
  }
}

module.exports = { stackToQueue };
