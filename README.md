# Code in JS

This is a little [js](https://en.wikipedia.org/wiki/JavaScript) project that contains code related with the awesome book [Code: The hidden Language of Computer Hardware and Software](http://www.goodreads.com/book/show/44882.Code).

## Running the tests

The code is on plain vanilla JavaScript, nevertheless we got in place some [unit tests](https://en.wikipedia.org/wiki/Unit_testing) you can run with [mocha](https://mochajs.org/) and [chai](http://chaijs.com/) frameworks testing frameworks. To run the tests you need to install, these frameworks first, by doing

      npm install mocha chai

After the installation you can run the tests by typing

      node_modules/mocha/bin/mocha



## Documentation

The code is also documented in a standard way so you can generate the respective html by installing the [jsdoc](https://www.npmjs.com/package/jsdoc) node package

      npm install jsdoc

After the installation you can create documentation for the classes you want by typing

      jsdoc src/morse.js -d documentation

this will generate the documentation in html format under the folder named *documentation*
