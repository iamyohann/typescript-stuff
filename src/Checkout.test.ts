import Checkout from "./Checkout";
import Product from "./Product"

test("Checkout returns correct total", () => {
  const c = new Checkout();
  expect(c.total()).toEqual(0);
});

test("Checkout initially has no items", () => {
  const c = new Checkout();
  expect(c.cart).toHaveLength(0);
});

test("Checkout scans items correctly", () => {
  const c = new Checkout();
  c.scan(new Product("foo", "Foo", 10.0));
  expect(c.cart).toHaveLength(1);
});
