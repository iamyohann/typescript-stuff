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
4. Regarding Scenario 3, since the the VGA is bundled into the cart, I have made the assumption that a new item will be added to the cart in addition to the VGA adapter already scanned in. This can easily be changed to assume that a VGA adapter must always be scanned in every time a macbook exists in the cart or throw an error. Since my assumption auto bundles a VGA adapter, Scenario 3 would have a total sum of 1979.98 rather than 1949.98. If there are any other VGA adapters added in, they would be full price (except if accompanying macbooks are added in)