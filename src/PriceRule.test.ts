import { threeFor2AppleTV, priceRules, superIPad, macbookVGAOffer } from "./PriceRule"
import { iPad, IProduct, AppleTV, Macbook, VGAAdapter } from "./Product";

const cartPrice = (cart: ReadonlyArray<IProduct>) => cart.reduce((sum, p) => sum + p.price, 0);

test("price rules no items", () => {
  const emptyCart: ReadonlyArray<IProduct> = [];
  priceRules.forEach((rule) => {
    const result = rule.apply(emptyCart);
    expect(result).toHaveLength(0);
    expect(cartPrice(result)).toEqual(0);
  });
});

test("3for2 single TV", () => {
  const cart: ReadonlyArray<IProduct> = [AppleTV];
  const rule = threeFor2AppleTV;
  expect(cartPrice(rule.apply(cart))).toEqual(AppleTV.price);
});

test("3for2 3 Apple TVs", () => {
  const cart: ReadonlyArray<IProduct> = [AppleTV, AppleTV, AppleTV];
  const rule = threeFor2AppleTV;
  expect(cartPrice(rule.apply(cart))).toEqual(AppleTV.price * 2);
});

test("superIpad more than 4 items", () => {
  const cart4: ReadonlyArray<IProduct> = [iPad, iPad, iPad, iPad];
  const cart5 = cart4.concat([iPad]);
  const rule = superIPad;

  expect(cartPrice(rule.apply(cart4))).toEqual(iPad.price * cart4.length);

  rule.apply(cart5).forEach((item) => {
    expect(item).toHaveProperty("price", 499.99);
  });
});

test("macbook vga offer", () => {
  const cart: ReadonlyArray<IProduct> = [Macbook];
  const rule = macbookVGAOffer;
  const result = rule.apply(cart);
  expect(result.filter((p) => p.sku === "mbp").length)
  .toEqual(result.filter((p) => p.sku === "vga").length);
});

test("macbook vga offer + existing vga", () => {
  const cart: ReadonlyArray<IProduct> = [Macbook, VGAAdapter, VGAAdapter];
  const rule = macbookVGAOffer;
  const result = rule.apply(cart);
  expect(result.filter((p) => p.sku === "vga").length)
  .toEqual(
    cart.filter((p) => p.sku === "mbp").length +
    cart.filter((p) => p.sku === "vga").length,
  );
});
