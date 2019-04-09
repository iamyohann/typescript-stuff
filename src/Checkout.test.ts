import Checkout from "./Checkout";
import Product, { AppleTV, VGAAdapter, Macbook, iPad } from "./Product";
import { threeFor2AppleTV, superIPad, macbookVGAOffer } from "./PriceRule";

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
  c.scan(new Product("mbp", "Foo", 10.0));
  expect(c.cart).toHaveLength(1);
});

test("Checkout with no rules", () => {
  // no price rules
  const checkoutNoRules = new Checkout([]);
  const items = [
    AppleTV,
    AppleTV,
    AppleTV,
    VGAAdapter,
    Macbook,
    Macbook,
    iPad,
  ]
  items.forEach(i => checkoutNoRules.scan(i));

  expect(checkoutNoRules.cart.length).toEqual(items.length);
  expect(checkoutNoRules.total())
  .toEqual(items.map(i => i.price).reduce((sum, price) => sum + price, 0));
});

test("Scenario 1", () => {
  // no price rules
  const checkout = new Checkout([
    threeFor2AppleTV,
    superIPad,
    macbookVGAOffer,
  ]);
  const items = [
    AppleTV,
    AppleTV,
    AppleTV,
    VGAAdapter,
  ];
  items.forEach(i => checkout.scan(i));

  expect(checkout.cart.length).toEqual(items.length);
  expect(checkout.total())
  .toEqual(249.0);
});

test("Scenario 2", () => {
  // no price rules
  const checkout = new Checkout([
    threeFor2AppleTV,
    superIPad,
    macbookVGAOffer,
  ]);
  const items = [
    AppleTV,
    iPad,
    iPad,
    AppleTV,
    iPad,
    iPad,
    iPad,
  ];
  items.forEach(i => checkout.scan(i));

  expect(checkout.cart.length).toEqual(items.length);
  expect(checkout.total())
  .toEqual(2718.95);
});

test("Scenario 3", () => {
  // no price rules
  const checkout = new Checkout([
    threeFor2AppleTV,
    superIPad,
    macbookVGAOffer,
  ]);
  const items = [
    Macbook,
    VGAAdapter,
    iPad,
  ];
  items.forEach(i => checkout.scan(i));

  expect(checkout.cart.length).toEqual(items.length);
  expect(checkout.total())
  .toEqual(1979.98);
});
