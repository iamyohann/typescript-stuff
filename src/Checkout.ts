
interface ICheckout {
  total(): number;
  scan(product: IProduct): void;
}
import { IProduct } from "./Product";

class Checkout implements ICheckout {
  constructor(public cart: IProduct[] = []) {}
  public total() {
    return 0;
  }
  public scan(product: IProduct) {
    this.cart = [...this.cart, product]
  }
}

export default Checkout;
export { Checkout, ICheckout };
