// Product instances are immutable once instantiated
// Similar to case classes in Scala
interface IProduct {
  readonly sku: string;
  readonly name: string;
  readonly price: number;
}

class Product implements IProduct {
  // This is a default constructor shorthand
  // https://kendaleiv.com/typescript-constructor-assignment-public-and-private-keywords/
  constructor(public sku: string, public name: string, public price: number) {}
}

const iPad = new Product("ipd", "Super iPad", 549.99);
const Macbook = new Product("mbp", "MacBook Pro", 1399.99);
const AppleTV = new Product("atv", "Apple TV", 109.50);
const VGAAdapter = new Product("vga", "VGA adapter", 30.00);

export default Product;
export { Product, IProduct, iPad, Macbook, AppleTV, VGAAdapter };
