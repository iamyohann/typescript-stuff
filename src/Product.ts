type ProductSKU = "ipd" | "mbp" | "atv" | "vga"

// Product instances are immutable once instantiated
// Similar to case classes in Scala
interface IProduct {
  readonly sku: ProductSKU;
  readonly name: string;
  readonly price: number;
}

class Product implements IProduct {
  // This is a default constructor shorthand
  // https://kendaleiv.com/typescript-constructor-assignment-public-and-private-keywords/
  constructor(public sku: ProductSKU, public name: string, public price: number) {}
}

const iPad = new Product("ipd", "Super iPad", 549.99);
const iPadSpecial = new Product("ipd", "Super iPad (Special)", 499.99);
const Macbook = new Product("mbp", "MacBook Pro", 1399.99);
const AppleTV = new Product("atv", "Apple TV", 109.50);
const TwoForThreeApple = new Product("atv", "Apple TV (3 for 2)", (AppleTV.price * 2) / 3);
const VGAAdapter = new Product("vga", "VGA adapter", 30.00);
const FreeVGAAdapter = new Product("vga", "VGA adapter", 0);

export default Product;
export { Product, IProduct, iPad, Macbook, AppleTV, VGAAdapter, iPadSpecial, TwoForThreeApple, FreeVGAAdapter };
