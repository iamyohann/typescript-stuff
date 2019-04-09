import { IProduct } from "./Product";

interface IPriceRule {
  apply(cart: ReadonlyArray<IProduct>): ReadonlyArray<IProduct>;
}

const threeFor2AppleTV = {
  apply(cart: ReadonlyArray<IProduct>): ReadonlyArray<IProduct> {
    return cart;
  },
} as IPriceRule;

const superIPad = {
  apply(cart: ReadonlyArray<IProduct>): ReadonlyArray<IProduct> {
    return cart;
  },
} as IPriceRule;

const macbookVGAOffer = {
  apply(cart: ReadonlyArray<IProduct>): ReadonlyArray<IProduct> {
    return cart;
  },
} as IPriceRule;

const priceRules: IPriceRule[] = [threeFor2AppleTV, superIPad, macbookVGAOffer];

export default IPriceRule;
export { priceRules, threeFor2AppleTV, superIPad, macbookVGAOffer, IPriceRule };
