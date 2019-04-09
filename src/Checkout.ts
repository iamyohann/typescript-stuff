
interface ICheckout {
  total(): number;
  scan(product: IProduct): void;
}
import IPriceRule from "./PriceRule";
import { IProduct } from "./Product";

class Checkout implements ICheckout {
  constructor(public priceRules: ReadonlyArray<IPriceRule> = [], public cart: ReadonlyArray<IProduct> = []) {}
  public total() {
    let cart = this.cart;

    for (const rule of this.priceRules) {
      cart = rule.apply(cart);
    }

    return cart.reduce((sum, p) => sum + p.price, 0);
  }
  public scan(product: IProduct) {
    this.cart = [...this.cart, product];
  }
}

export default Checkout;
export { Checkout, ICheckout };
