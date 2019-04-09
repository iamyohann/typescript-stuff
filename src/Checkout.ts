
interface ICheckout {
  total(): number;
}

class Checkout implements ICheckout {
  public total() {
    return 0;
  }
}

export default Checkout;
export { Checkout, ICheckout };
