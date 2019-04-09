import Checkout, { ICheckout } from "./Checkout";

test("Checkout returns correct total", () => {
    const c: ICheckout = new Checkout();
    expect(c.total()).toEqual(0);
});
