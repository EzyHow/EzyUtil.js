# EzyUtil.js

(Beta version)
A JavaScript utility library.

***

## Installation

**Using NPM**

    npm install ezyutil.js --save

**Using Yarn**

    yarn add ezyutil.js

***

## Usage

    import { addNumbers, multiplyNumbers, concatStrings } from 'ezyutil.js';

**OR**

    const { addNumbers, multiplyNumbers, concatStrings } = require('ezyutil.js');

**After importing:** 

    console.log(addNumbers(1,2,3,4,5........)); // add N numbers
    console.log(multiplyNumbers(1,2,3,4,5........)); // multiply N numbers
    console.log(concatStrings("Hello", " ", "world")); // concat N strings

***

## Another way

You can also add this package directly to your HTML file in the following way:

    
    <script src="https://unpkg.com/ezyutil.js@1.0.5/ezyutil.js"></script>
    

After this, you can use all functionality in following way:

    console.log(ezyutil.addNumbers(1,2,3,4,5........)); // add N numbers
    console.log(ezyutil.multiplyNumbers(1,2,3,4,5........)); // multiply N numbers
    console.log(ezyutil.concatStrings("Hello", " ", "world")); // concat N strings

_All functions are available with **ezyutil** object._

***

## Roadmap

This is just a initial setup of library. A lot more is on the way. Stay tuned for updates.
