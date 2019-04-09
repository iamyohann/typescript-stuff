import { IProduct } from "./Product";

interface IPriceRule {
  apply(cart: ReadonlyArray<IProduct>): ReadonlyArray<IProduct>;
}

const threeFor2AppleTV = {
  apply(cart: ReadonlyArray<IProduct>): ReadonlyArray<IProduct> {
    return cart;
  },
} as IPriceRule;

const priceRules: IPriceRule[] = [threeFor2AppleTV];

export default IPriceRule;
export { priceRules, threeFor2AppleTV, IPriceRule }
