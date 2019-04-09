import { IProduct, iPadSpecial, TwoForThreeApple, FreeVGAAdapter } from "./Product";

interface IPriceRule {
  apply(cart: ReadonlyArray<IProduct>): ReadonlyArray<IProduct>;
}

const threeFor2AppleTV = {
  apply(cart: ReadonlyArray<IProduct>): ReadonlyArray<IProduct> {
    // check how many non 3-pair tv's we have to skip
    let skips = cart.filter(p => p.sku === "atv").length % 3;

    return cart.map((p) => {
      if (skips > 0 && p.sku === "atv") {
        skips -= 1;
        return p;
      } else if (p.sku === "atv") {
        return TwoForThreeApple;
      }

      return p;
    });

  },
} as IPriceRule;

const superIPad = {
  apply(cart: ReadonlyArray<IProduct>): ReadonlyArray<IProduct> {
    const count = cart.filter((p) => p.sku === "ipd").length;

    if (count > 4) {
      return cart.map((p) => {
        if (p.sku === "ipd") {
          return iPadSpecial;
        }

        return p;
      });
    }

    return cart;
  },
} as IPriceRule;

const macbookVGAOffer = {
  apply(cart: ReadonlyArray<IProduct>): ReadonlyArray<IProduct> {
    const extraVGAs = cart.filter(p => p.sku === "mbp").map(() => FreeVGAAdapter);
    return cart.concat(extraVGAs);
  },
} as IPriceRule;

const priceRules: IPriceRule[] = [threeFor2AppleTV, superIPad, macbookVGAOffer];

export default IPriceRule;
export { priceRules, threeFor2AppleTV, superIPad, macbookVGAOffer, IPriceRule };
