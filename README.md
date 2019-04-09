### Guide

First install all dependencies

```
yarn --dev
```

Run the code

```
yarn start
```

Tests

```
yarn test
yarn test:watch
```

Coverage

```
yarn coverage
```

Assumptions

1. Price rules are applied in priority order (in the order they are specified)
2. Each price rule creates a new version of the checkout cart. This way each application of a price rule on a cart is a pure function of the cart content and rules
3. We assume price rules are applied in priority order (in the order they are specified to checkout), as it ensures cross-cutting or conflicting price rules are applied safely and in order. (The alternative is to ensure price rules don't conflict ever which may not be a simple task as they change over time and are hard to govern)
