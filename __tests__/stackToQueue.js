const { stackToQueue } = require("../challenges/stackToQueue");

describe("stackToQueue", () => {
  it("should allow construction with new", () => {
    const stack = new stackToQueue();
    expect(stack).toBeDefined();
  });

  const stack = new stackToQueue();
  it("should have push and pop methods", () => {
    expect(stack.push).toBeDefined();
    expect(stack.pop).toBeDefined();
  });

  it("should behave as a stack", () => {
    stack.push(1);
    expect(stack.pop()).toBe(1);
  });

  it("should maintain correct stack order (LIFO)", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeUndefined();
  });

  it("should hold up against large inputs", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.push(6);
    stack.push(7);
    stack.push(8);
    stack.push(9);
    stack.push(10);
    stack.push(11);
    stack.push(12);
    stack.push(13);
    stack.push(14);
    stack.push(15);
    expect(stack.pop()).toBe(15);
    expect(stack.pop()).toBe(14);
    expect(stack.pop()).toBe(13);
    expect(stack.pop()).toBe(12);
    expect(stack.pop()).toBe(11);
    expect(stack.pop()).toBe(10);
    expect(stack.pop()).toBe(9);
    expect(stack.pop()).toBe(8);
    expect(stack.pop()).toBe(7);
    expect(stack.pop()).toBe(6);
    expect(stack.pop()).toBe(5);
    expect(stack.pop()).toBe(4);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeUndefined();
    expect(stack.pop()).toBeUndefined();
    expect(stack.pop()).toBeUndefined();
  });
});
