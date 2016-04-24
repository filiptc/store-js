[![Build Status](https://travis-ci.org/filiptc/store-js.svg?branch=master)](https://travis-ci.org/filiptc/store-js)
[![codecov.io](https://codecov.io/github/filiptc/store-js/coverage.svg?branch=master)](https://codecov.io/github/filiptc/store-js?branch=master)


Table of contents
=================

  * [How to run](#how-to-run)
  * [Assumptions & reasoning](#assumptions--reasoning)
  * [Design & Code structure](#design--code-structure)
  * [Notes](#notes)


How to run
============

1. Install js ([documentation](https://jslang.org/doc/install))
2. Get project `git clone git@github.com:filiptc/store-js.git`
3. Install dependencies `npm install`
4. Run tests `npm test`
5. (Optional) Run implementation code [src/index.js](src/index.js)
  1. Install dependency `npm install -g webpack`
  2. Pack and run `webpack; node dist/bundle.js`


Assumptions & reasoning
=====

I decided to code in vanilla js (ES2015) as I have little experience with CoffeeScript.

The store is designed in two main layers, one being the models (item and cart), the other one being
the service layer that exposes the required API.

The service relies on the rules which are allocated in a sibling directory. The rules extend from a
`Rule` object which hints on two methods called by the service, that the children need to implement:
IsApplicable and Apply. IsApplicable is called first to check if conditions for rule apply. Apply
gets called for modifying the cart passed as argument.



Design & code structure
=====

All files containing methods and functions (except `index.js`) include a test file with unit tests
in the `test` directory. Sources are in the `src` directory.

* [index.js](src/index.js): Main implementation as guideline.
* [service/checkout.js](src/service/checkout.js): Library entry point. Defines `Checkout` service.
* `rules/`: Contains the `rules` package files.
    * [rule.js](src/rule.js): Rule interface specification.
    * [tshirt.js](src/tshirt.js): T-Shirt Rule implementation.
    * [voucher.js](src/voucher.js): Voucher Rule implementation.
* `model/`: Contains the `model` package files.
  * [cart.js](src/models/cart.js): Represents the cart model with an array of Items as property, a
  constructor and methods for adding, getting the price-sum and counting by product-code.
  * [item.js](src/models/item.js): Represents the item model with constructors for available items.
* `constants/`: Contains files with contants for the application.
* `helpers/`: Some reusable helper methods for the application.


Notes
=====

* More rules can be easily added in the [rules](src/rules) directory.