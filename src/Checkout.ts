
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
  // @ts-ignore
  public scan(product: IProduct) {}
}

export default Checkout;
export { Checkout, ICheckout };
