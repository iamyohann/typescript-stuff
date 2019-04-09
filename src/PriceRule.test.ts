import { threeFor2AppleTV } from "./PriceRule"
import { iPad, IProduct } from "./Product";

test("3for2 no items", () => {
  const cart: ReadonlyArray<IProduct> = [];
  expect(threeFor2AppleTV.apply(cart)).toHaveLength(0);
});

test("3for2 single item", () => {
  const cart: ReadonlyArray<IProduct> = [iPad];
  expect(threeFor2AppleTV.apply(cart)
  .reduce((sum, p) => sum + p.price, 0)).toEqual(iPad.price);
});

test("3for2 3 Apple TVs", () => {
  const cart: ReadonlyArray<IProduct> = [iPad];
  expect(threeFor2AppleTV.apply(cart)).toHaveLength(1);
});
