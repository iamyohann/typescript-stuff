import { threeFor2AppleTV } from "./PriceRule"
import { IProduct } from "./Product";

test("3for2 no items", () => {
  const cart: ReadonlyArray<IProduct> = [];
  expect(threeFor2AppleTV.apply(cart)).toHaveLength(0);
});
