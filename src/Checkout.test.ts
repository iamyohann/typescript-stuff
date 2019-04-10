import Checkout from "./Checkout";
import Product from "./Product";
import { threeFor2AppleTV } from "./PriceRule";
import 'jest-extended';

test("Checkout returns correct total", () => {
  const c = new Checkout();
  expect(c.total()).toEqual(0);
});

test("Checkout initially has no items", () => {
  const c = new Checkout();
  expect(c.cart).toHaveLength(0);
});

test("Checkout scans items correctly", () => {
  const c = new Checkout();
  c.scan(new Product("mbp", "Foo", 10.0));
  expect(c.cart).toHaveLength(1);
});

test("Expect price rules to be invoked during total", () => {
  const rule = threeFor2AppleTV;
  const ruleApply = jest.spyOn(rule, "apply");

  const c = new Checkout([
    threeFor2AppleTV,
  ]);
  c.scan(new Product("mbp", "Foo", 10.0));
  c.total();
  expect(ruleApply).toHaveBeenCalledTimes(1);
});

test("Expected rules to be called in correct order", () => {
  const rule1 = {
    apply: jest.fn().mockImplementation(a => a),
  };

  const rule2 = {
    apply: jest.fn().mockImplementation(a => a),
  };

  const rule3 = {
    apply: jest.fn().mockImplementation(a => a),
  };

  const rules = [rule1, rule2, rule3];
  const c = new Checkout(rules);
  c.scan(new Product("mbp", "Foo", 10.0));
  c.total();

  expect(rule1.apply).toHaveBeenCalledBefore(rule2.apply);
  expect(rule2.apply).toHaveBeenCalledBefore(rule3.apply);
});
